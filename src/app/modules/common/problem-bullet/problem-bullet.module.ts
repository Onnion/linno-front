import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemBulletComponent } from './problem-bullet.component';
import { MaterialModule } from 'src/app/mat.module';

@NgModule({
  declarations: [ProblemBulletComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ProblemBulletComponent]
})
export class ProblemBulletModule { }
