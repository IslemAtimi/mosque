import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncouragementCardsComponent } from './encouragement-cards/encouragement-cards.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    InscriptionComponent,
    ProfilComponent,
    EncouragementCardsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class PublicModule { }
