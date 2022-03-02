import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContestComponent } from './add-contest/add-contest.component';
import { ContestCategorieListComponent } from './contest-categorie-list/contest-categorie-list.component';
import { ContestListComponent } from './contest-list/contest-list.component';
import { SlotsComponent } from './slots/slots.component';

const routes: Routes = [
  {
    path:"categories",
    component:ContestCategorieListComponent
  },
  {
    path:"list",
    component:ContestListComponent
  },
  {
    path:"add",
    component:AddContestComponent
  },
  {
    path:"slots",
    component:SlotsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestRoutingModule { }
