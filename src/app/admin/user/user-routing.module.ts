import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
{
  "path":"",
  component:DashboardComponent
},
{
  path:"list",
  component:UserTableComponent

},
{
  path:"detail/:id",
  component:UserDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
