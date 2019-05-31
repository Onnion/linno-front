import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsFilterAccountComponent } from './leads-filter-account.component';
import { MaterialModule } from 'src/app/mat.module';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LeadsFilterAccountComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgbDatepickerModule,
    ReactiveFormsModule
  ],
  exports: [ LeadsFilterAccountComponent ]

})
export class LeadsFilterAccountModule { }
