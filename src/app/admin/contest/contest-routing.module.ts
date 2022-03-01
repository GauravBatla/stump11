import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContestComponent } from './add-contest/add-contest.component';
import { ContestCategorieListComponent } from './contest-categorie-list/contest-categorie-list.component';
import { ContestListComponent } from './contest-list/contest-list.component';

const routes: Routes = [
  {
    path:"categories",
    component:ContestCategorieListComponent
  },
  {
    path:"list",
    component:ContestListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestRoutingModule { }
