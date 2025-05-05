import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NiveauEtudeRoutingModule } from './niveau-etude-routing.module';
import { ListComponent } from './list/list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    NiveauEtudeRoutingModule,
    FormsModule,
    MatDialogModule
  ]
})
export class NiveauEtudeModule { }
