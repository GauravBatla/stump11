import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedListComponent } from './created-list/created-list.component';
import { UserWiningComponent } from './user-wining/user-wining.component';

const routes: Routes = [
  {
    path:"teams",
    component:CreatedListComponent
  },
  {
    path:"winnings",
    component:UserWiningComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCreatedTeamsRoutingModule { }
