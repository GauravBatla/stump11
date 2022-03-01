import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './add-page/add-page.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

const routes: Routes = [
  {
    path: "add",
    component: AddPageComponent
  },
  {
    path: "detail/:id",
    component: DetailViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebViewRoutingModule { }
