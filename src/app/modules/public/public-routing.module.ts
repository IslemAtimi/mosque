import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path: '', redirectTo: 'inscription', pathMatch: 'full'},
  {path: 'inscription', component: InscriptionComponent},
  {path: ':id', component: ProfilComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
