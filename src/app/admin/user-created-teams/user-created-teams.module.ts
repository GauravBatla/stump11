import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCreatedTeamsRoutingModule } from './user-created-teams-routing.module';
import { CreatedListComponent } from './created-list/created-list.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    CreatedListComponent
  ],
  imports: [
    CommonModule,
    UserCreatedTeamsRoutingModule,
    AngularMaterialModule
  ]
})
export class UserCreatedTeamsModule { }
