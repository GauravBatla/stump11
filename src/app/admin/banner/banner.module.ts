import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { AddBannerComponent } from './add-banner/add-banner.component';
import { BannerListComponent } from './banner-list/banner-list.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    AddBannerComponent,
    BannerListComponent
  ],
  imports: [
    CommonModule,
    BannerRoutingModule,
    AngularMaterialModule

  ]
})
export class BannerModule { }
