import { Component, OnInit } from '@angular/core';
import { getDataUser } from 'src/app/app.utils';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user: any;
  public menus: any[];

  constructor(private auth: AuthService) { }

  public logout(): void {
    this.auth.logout();
  }

  ngOnInit() {
    this.user = getDataUser();
    this.menus = [
      { icon: 'reply', name: 'sair' }
    ];
  }

}
