import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestRoutingModule } from './contest-routing.module';
import { AddContestComponent } from './add-contest/add-contest.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ContestListComponent } from './contest-list/contest-list.component';
import { ContestCategorieListComponent } from './contest-categorie-list/contest-categorie-list.component';
import { ContestAddCategorieComponent } from './contest-add-categorie/contest-add-categorie.component';


@NgModule({
  declarations: [
    AddContestComponent,
    ContestListComponent,
    ContestCategorieListComponent,
    ContestAddCategorieComponent
  ],
  imports: [
    CommonModule,
    ContestRoutingModule,
    AngularMaterialModule

  ]
})
export class ContestModule { }
