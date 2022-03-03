import { Component, OnInit } from '@angular/core';
import { EntitySportService } from '../entiy-sports.service';

@Component({
  selector: 'app-result-match',
  templateUrl: './result-match.component.html',
  styleUrls: ['./result-match.component.css']
})
export class ResultMatchComponent implements OnInit {

   matchdata:any;
  liveMatchView:boolean = false
  
 constructor(private _http:EntitySportService) { }

 ngOnInit(): void {
this.getUpcomingMatch()
 }

 getLiveMatch(){
   this.liveMatchView = true
   this._http.LiveMatchApi(100,3).subscribe((res:any)=>{
     // console.log(res);
     // alert("ok")
     // const status = response.status
     this.matchdata = res.response;
     console.log(this.matchdata);
     
   })
 }
 getUpcomingMatch(){
   this.liveMatchView = false
   this._http.LiveMatchApi(100,2).subscribe((res:any)=>{
   
     this.matchdata = res.response;
     console.log(this.matchdata);
     
   })
 }
}
