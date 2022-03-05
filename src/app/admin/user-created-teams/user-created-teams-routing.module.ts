import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedListComponent } from './created-list/created-list.component';

const routes: Routes = [
  {
    path:"",
    component:CreatedListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCreatedTeamsRoutingModule { }
