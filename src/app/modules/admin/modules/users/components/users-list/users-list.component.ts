import { Component, OnInit } from '@angular/core';
import { ListComponent } from 'src/app/modules/common/interfaces/list/list-components.helpers';
import { UsersService } from 'src/app/modules/common/services/users/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent extends ListComponent implements OnInit {
  constructor(private usersService: UsersService) {
    super();
  }

  private initConfigs(): void {
    this.service = this.usersService;
    this.methodLoad = 'getData';
  }

  ngOnInit() {
    this.initConfigs();
    this.loadData();
  }

}
