import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EntitySportService } from '../entiy-sports.service';
import {CreateIteamComponent} from '../create-iteam/create-iteam.component'

@Component({
  selector: 'app-upcoming-match',
  templateUrl: './upcoming-match.component.html',
  styleUrls: ['./upcoming-match.component.css']
})
export class UpcomingMatchComponent implements OnInit {

  matchdata:any;
  liveMatchView:boolean = false
  
 constructor(private _http:EntitySportService,public dialog: MatDialog) { }

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
   this._http.LiveMatchApi(100,1).subscribe((res:any)=>{
     // console.log(res);
     // alert("ok")
     // const status = response.status
     this.matchdata = res.response;
     console.log(this.matchdata);
     
   })
 }



}
