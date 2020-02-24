import { Component, OnInit } from '@angular/core';
import { getDataUser } from 'src/app/app.utils';
import { AuthService } from '../../../common/services/auth/auth.service';
import { User } from 'src/app/modules/common/models/user/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user: User;
  public menus: { icon: string, name: string }[];

  constructor(private auth: AuthService) { }

  public logout(): void {
    this.auth.logout();
  }

  ngOnInit() {
    this.user = getDataUser('app');
    this.menus = [
      { icon: 'reply', name: 'sair' }
    ];
  }

}
