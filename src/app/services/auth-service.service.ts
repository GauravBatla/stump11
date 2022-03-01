import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MasterServicesService } from './master-services.service';
interface User {
  token:'null'
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _http: MasterServicesService) { }

  login(data:any){
    return this._http.post('api/admin/login',data)
  };

  userList(){
    return this._http.get('/api/admin/user-list')
  }
  webViewList(){
    return this._http.get('api/admin/list/web-view-page')
  }
}
