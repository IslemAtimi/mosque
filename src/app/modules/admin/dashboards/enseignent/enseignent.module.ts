import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignentRoutingModule } from './enseignent-routing.module';
import { ListComponent } from './list/list.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    EnseignentRoutingModule,
    
  ]
})
export class EnseignentModule { }
