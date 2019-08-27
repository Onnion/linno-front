import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsFilterTimesComponent } from './leads-filter-times.component';
import { MaterialModule } from 'src/app/mat.module';
import {NgbDatepickerModule, NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n, I18n } from './leads-filter-times-i18n';


@NgModule({
  declarations: [LeadsFilterTimesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgbDatepickerModule  ],
  providers: [
    [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
],
  exports: [ LeadsFilterTimesComponent ]

})
export class LeadsFilterTimesModule { }
