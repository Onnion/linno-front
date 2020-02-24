import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { fade } from 'src/app/helpers/animations/animations.helper';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
  animations: [fade]
})
export class ConfirmComponent implements OnInit {

  // tslint:disable-next-line:no-output-rename
  @Output('confirm') $confirm: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-rename
  @Output('cancel') $cancel: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string;
  @Input() loading: boolean;
  @Input() subtitle: string;
  @Input() confirmTitle: string;
  @Input() cancelTitle: string;


  constructor() { }


  public click(type: string): void {
    this[`$${type}`].emit(true);
  }


  ngOnInit() {
  }


}
