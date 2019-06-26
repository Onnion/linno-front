import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AclService } from 'ng2-acl';
import { AccountService } from 'src/app/services/account/account.service';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-problem-bullet',
  templateUrl: './problem-bullet.component.html',
  styleUrls: ['./problem-bullet.component.css']
})
export class ProblemBulletComponent implements OnInit {
  @Output('message') message: EventEmitter<boolean> = new EventEmitter<boolean>();
  private status: boolean;

  constructor(public aclService: AclService, private filterService: FilterService, private accountService: AccountService) { }

  public activeMessage(a): void {
    this.status = !this.status;
    this.message.emit(this.aclService.can('see-bullet') ? !this.status : this.status);

    if (this.aclService.can('set-bullet')) {
      this.accountService.setProblemAccountCalls(this.filterService.getAccount().id, { status_call: this.status }).subscribe(
        (res) => {},
        (error) => console.log(error)
      )
    }
  }

  ngOnInit() {
    this.status = this.filterService.getAccount().status_call;
  }

}
