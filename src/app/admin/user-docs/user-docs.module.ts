import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDocsRoutingModule } from './user-docs-routing.module';
import { UserDocumentTableComponent } from './user-document-table/user-document-table.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ViewDocsComponent } from './view-docs/view-docs.component';


@NgModule({
  declarations: [UserDocumentTableComponent, ViewDocsComponent],
  imports: [
    CommonModule,
    UserDocsRoutingModule,
    AngularMaterialModule,

  ]
})
export class UserDocsModule { }
