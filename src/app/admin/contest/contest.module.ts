import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestRoutingModule } from './contest-routing.module';
import { AddContestComponent } from './add-contest/add-contest.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ContestListComponent } from './contest-list/contest-list.component';
import { ContestCategorieListComponent } from './contest-categorie-list/contest-categorie-list.component';
import { ContestAddCategorieComponent } from './contest-add-categorie/contest-add-categorie.component';
import { SlotsComponent } from './slots/slots.component';
import { ContestUserTeamsComponent } from './contest-user-teams/contest-user-teams.component';


@NgModule({
  declarations: [
    AddContestComponent,
    ContestListComponent,
    ContestCategorieListComponent,
    ContestAddCategorieComponent,
    SlotsComponent,
    ContestUserTeamsComponent
  ],
  imports: [
    CommonModule,
    ContestRoutingModule,
    AngularMaterialModule

  ]
})
export class ContestModule { }
