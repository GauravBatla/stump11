import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDocumentTableComponent } from './user-document-table/user-document-table.component';

const routes: Routes = [{
  path:"",
  component:UserDocumentTableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDocsRoutingModule { }
