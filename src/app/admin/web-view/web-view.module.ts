import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebViewRoutingModule } from './web-view-routing.module';
import { AddPageComponent } from './add-page/add-page.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { DetailViewComponent } from './detail-view/detail-view.component';


@NgModule({
  declarations: [
    AddPageComponent,
    DetailViewComponent
  ],
  imports: [
    CommonModule,
    WebViewRoutingModule,
    AngularMaterialModule
  ]
})
export class WebViewModule { }
