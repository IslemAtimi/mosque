import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EtudiantsDetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'list',component:ListComponent},
  {path: ':id',component    : EtudiantsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
