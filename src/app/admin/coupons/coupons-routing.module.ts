import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCouponComponent } from './add-edit-coupon/add-edit-coupon.component';
import { CouponDetailsComponent } from './coupon-details/coupon-details.component';
import { CouponTableComponent } from './coupon-table/coupon-table.component';

const routes: Routes = [
  {
    path:"",
    component:CouponTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponsRoutingModule { }
