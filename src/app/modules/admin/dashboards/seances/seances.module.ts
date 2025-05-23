import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeancesRoutingModule } from './seances-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    SeancesRoutingModule
  ]
})
export class SeancesModule { }
