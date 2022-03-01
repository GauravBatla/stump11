import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebViewService {

  constructor(private _http:HttpClient) {
   }

   addView(data:any){
   return  this._http.post(environment.baseUrl+'api/admin/add/web-view-page',data)
   }

   getViewDetail(id:any){
   return  this._http.get(environment.baseUrl+'api/admin/list/web-view-page/'+id)

   }
}
