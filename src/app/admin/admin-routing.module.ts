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
      },
      {
        path: "user-transaction",
        loadChildren: () => import('./user-transactions/user-transactions.module').then(m => m.UserTransactionsModule)
      },
      {
        path: "page",
        loadChildren: () => import('./web-view/web-view.module').then(m => m.WebViewModule)
      },
      {
        path: "app-setting",
        loadChildren: () => import('./app-setting/app-setting.module').then(m => m.AppSettingModule)
      },
      {
        path: "contest",
        loadChildren: () => import('./contest/contest.module').then(m => m.ContestModule)
      },
      {
        path:"banners",
        loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)
      },{
        path:"entity-sport",
        loadChildren:()=> import("../entity-sport/entity-sport.module").then(m=>m.EntitySportModule)
      },
      {
        path:"user-teams",
        loadChildren:()=>import("./user-created-teams/user-created-teams.module").then(m=>m.UserCreatedTeamsModule)
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
