import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSettingRoutingModule } from './app-setting-routing.module';
import { SettingComponent } from './setting/setting.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { MainScreenComponent } from './main-screen/main-screen.component';


@NgModule({
  declarations: [
    SettingComponent,
    MainScreenComponent
  ],
  imports: [
    CommonModule,
    AppSettingRoutingModule,
    AngularMaterialModule
  ]
})
export class AppSettingModule { }
