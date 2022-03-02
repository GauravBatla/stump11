import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor(private _http: HttpClient) { }

  userDocsList(): Observable<any> {
    return this._http.get(environment.baseUrl + 'api/admin/user/documents/list')
  };

  // approvedUserDocs(): Observable<any> {
  //   return this._http.put(environment.baseUrl + 'api/admin/document/verify')
  // };

  
}
