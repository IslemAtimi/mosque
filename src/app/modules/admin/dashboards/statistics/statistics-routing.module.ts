import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatComponent } from './stat/stat.component';

const routes: Routes = [
  {path: '', redirectTo: 'stat', pathMatch: 'full'},
  {path: 'stat', component: StatComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
