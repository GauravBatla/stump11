import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AngularComponent } from './angular/angular.component';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AngularComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
  ]
})
export class AuthModule { }
