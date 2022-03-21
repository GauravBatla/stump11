import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateTeamService {

  constructor(private _http: HttpClient) { }

  TeamList(): Observable<any> {
    return this._http.get(environment.baseUrl + 'api/admin/user/team/list')
  };
  
  winningList(): Observable<any> {
    return this._http.get(environment.baseUrl + 'api/admin/list/winner/user')
  };
  winningContestList(): Observable<any> {
    return this._http.get(environment.baseUrl + 'api/admin/winner/contest/list')
  };
  addWinningList(data:any): Observable<any> {
    return this._http.post(environment.baseUrl + 'api/admin/add/winner/user',data)
  };

  
 
}
