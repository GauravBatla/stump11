import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private _http: HttpClient) { }

  AddCoupon(data: any) {
    return this._http.post(environment.baseUrl + 'api/admin/coupon', data)
  };

  couponsList(status:any){
    return this._http.get(environment.baseUrl+'api/admin/coupon?status='+status)
  }

}
