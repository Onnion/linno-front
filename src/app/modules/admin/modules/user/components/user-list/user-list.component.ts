import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/modules/admin/services/entites/users/users.service';
import { NotifyService } from 'src/app/modules/admin/services/notify/notify.service';
import { ListComponent } from 'src/app/helpers/list-component/list-component.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends ListComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private notifyService: NotifyService,
  ) {
    super();
    this.notify = this.notifyService;
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
