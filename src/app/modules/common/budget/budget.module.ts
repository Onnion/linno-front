import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './budget.component';
import { MaterialModule } from 'src/app/mat.module';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  imports: [CommonModule, MaterialModule, LoadingModule],
  declarations: [BudgetComponent],
  exports: [BudgetComponent]
})
export class BudgetModule { }
