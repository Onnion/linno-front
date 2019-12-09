import { NgModule } from '@angular/core';
import { CpfPipe } from './cpf.pipe';

@NgModule({
    declarations: [CpfPipe],
    exports: [CpfPipe]
})
export class CpfPipeModule { }
