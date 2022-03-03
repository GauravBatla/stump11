import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
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
