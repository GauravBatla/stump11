import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { AddEditCouponComponent } from './coupons/add-edit-coupon/add-edit-coupon.component';
import { CouponTableComponent } from './coupons/coupon-table/coupon-table.component';
import { CouponDetailsComponent } from './coupons/coupon-details/coupon-details.component';


@NgModule({
  declarations: [NavigationComponent, DashboardComponent, ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    AngularMaterialModule,

  ]
})
export class AdminModule { }
