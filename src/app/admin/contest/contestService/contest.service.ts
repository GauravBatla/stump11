import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContestService {
  constructor(private _http: HttpClient) { }

  AddCategory(data: any) {
    return this._http.post(environment.baseUrl + 'api/admin/category', data)
  };

  categoryList() {
    return this._http.get(environment.baseUrl + 'api/admin/category')
  };
  
}