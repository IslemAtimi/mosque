import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { ListComponent } from './list/list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { EtudiantsDetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    ListComponent,
    EtudiantsDetailsComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    SharedModule,
    MatButtonModule
  ]
})
export class EtudiantModule { }
