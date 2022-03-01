import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private _http: HttpClient) { }

  transactionList(): Observable<any> {
    return this._http.get(environment.baseUrl + 'api/admin/transaction/list')
  };


  filterTransAction(status: any) {
    return this._http.get(environment.baseUrl + "api/admin/transaction/list/?txStatus=" + status)

  }


}
