import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './components/detail/detail.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DetailComponent
  ],
  exports: [
    DetailComponent
  ]
})
export class VehiclesModule { }
