import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatComponent } from './stat/stat.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    StatComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class StatisticsModule { }
