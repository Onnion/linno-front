import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor (private notify: NotifierService) { }

  public show ( type: string, content: string): void {
    this.notify.notify(type, content);
  }

  public removeAll () {
    this.notify.hideAll();
  }
}
