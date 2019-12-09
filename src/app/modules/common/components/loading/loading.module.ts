import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LoadingComponent } from "./loading.component";
import { MatProgressSpinnerModule } from "@angular/material";

@NgModule({
  imports: [RouterModule, CommonModule, MatProgressSpinnerModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class LoadingModule {}
