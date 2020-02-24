import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskDirective } from './mask.directive';

@NgModule({
    declarations: [
        MaskDirective
    ],
    exports: [
        MaskDirective
    ],
    imports: [
        CommonModule
    ],
})
export class MaskDirectiveModule { }
