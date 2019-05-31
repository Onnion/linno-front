import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsFilterTimesComponent } from './leads-filter-times.component';
import { MaterialModule } from 'src/app/mat.module';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [LeadsFilterTimesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgbDatepickerModule
  ],
  exports: [ LeadsFilterTimesComponent ]

})
export class LeadsFilterTimesModule { }
