import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserTableComponent } from './user-table/user-table.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserDetailsComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    LayoutModule,
    AngularMaterialModule,
   

  ]
})
export class UserModule { }
