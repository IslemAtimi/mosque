import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    InscriptionComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatTableModule
  ]
})
export class PublicModule { }
