import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponsRoutingModule } from './coupons-routing.module';
import { AddEditCouponComponent } from './add-edit-coupon/add-edit-coupon.component';
import { CouponDetailsComponent } from './coupon-details/coupon-details.component';
import { CouponTableComponent } from './coupon-table/coupon-table.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';


@NgModule({
  declarations: [AddEditCouponComponent, CouponTableComponent, CouponDetailsComponent],
  imports: [
    CommonModule,
    CouponsRoutingModule,
    AngularMaterialModule,

  ]
})
export class CouponsModule { }
