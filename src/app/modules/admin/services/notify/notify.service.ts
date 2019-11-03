import { Injectable } from '@angular/core';
// import { NotificationsService } from 'angular2-notifications';
// import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private notify: any;
  // private notify: NotificationsService

  private optionsNotify = {
    timeOut: 3000,
    showProgressBar: false
  };

  constructor() { }

  public show(type: string, content: string): void {
    this.notify.notify(type, content);
  }

  public removeAll() {
    this.notify.hideAll();
  }
}
