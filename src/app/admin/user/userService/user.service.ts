import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  userList() {
    return this._http.get(environment.baseUrl + 'api/admin/user-list')
  };

  userDetails(id: any) {
    return this._http.get(environment.baseUrl + "api/admin/user/details/" + id)
  };

}
