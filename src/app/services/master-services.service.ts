import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterServicesService {

  
  constructor(private _http:HttpClient) { }
   
  get(url:string){
  return this._http.get(environment.baseUrl+url);
  }

  post(url:string,data:any){
   return this._http.post(environment.baseUrl+url,data)
  };
   
  put(url:string,data:any)
  {
    console.log(data)
    return this._http.put(environment.baseUrl+url,data) 
  }
  delete(url:string)
  {
    // console.log(data)
    return this._http.delete(environment.baseUrl+url) 
  }
}