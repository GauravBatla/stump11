import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: "",
    component: NavigationComponent,
    children: [
      {
        path: "user",
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),

      },
      {
        path: "coupons",
        loadChildren: () => import('./coupons/coupons.module').then(M => M.CouponsModule)
      },
      {
        path: "user-documents",
        loadChildren: () => import('./user-docs/user-docs.module').then(m => m.UserDocsModule)
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
