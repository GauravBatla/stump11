import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EntitySportService {
    token:any = "de7cddfd6309f89136ca5c4f68aaff99";
    // url:string ="https://rest.entitysport.com/v2/matches/?status=1&pre_squad=true&per_page=100&token={{sportToken}}";
    // url:string ="https://rest.entitysport.com/v2/matches/?status=1&pre_squad=true&per_page=100&token={{sportToken}}";
    constructor(private _http:HttpClient) { }
    LiveMatchApi(page:any,matchStatus:any){
        const url:string =`https://rest.entitysport.com/v2/matches/?status=${matchStatus}&pre_squad=true&per_page=${page}&token=${this.token}`;
        return this._http.get(url)
    }

    matchdetails(id:any){
    const url:string = `https://rest.entitysport.com/v2/matches/${id}/info?token=${this.token}`;
    return this._http.get(url)
    }
}