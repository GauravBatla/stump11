import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private _http: HttpClient) { }

  AddCBanner(data: any) {
    return this._http.post(environment.baseUrl + 'api/admin/banner', data)
  };


  bannerList(){
    return this._http.get(environment.baseUrl+'api/admin/banner')
  }
  
}