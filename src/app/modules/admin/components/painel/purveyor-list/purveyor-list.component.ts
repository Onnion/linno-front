import { Component, OnInit } from '@angular/core';
import { listObjShowup } from 'src/app/helpers/animations/animations.helper';
import { ListComponent } from 'src/app/helpers/list-component/list-component.component';
import { UsersService } from '../../../services/entites/users/users.service';
import { NotifyService } from '../../../services/notify/notify.service';

@Component({
  selector: 'app-purveyor-list',
  templateUrl: './purveyor-list.component.html',
  styleUrls: ['./purveyor-list.component.css'],
  animations: [listObjShowup]
})

export class PurveyorListComponent extends ListComponent implements OnInit {

  // @ViewChild(MatPaginator) pagination: MatPaginator;

  protected notify;
  protected service;


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

  public actions($event): void {
    const target = $event.target;
    const tag = target.tagName;
    let parent = target.parentNode;

    if (tag === 'I') {
      parent = parent.parentNode;
    }

    parent.children[1].classList.toggle('show');

  }

  ngOnInit() {
    this.initConfigs();
    this.loadData();

  }

}
