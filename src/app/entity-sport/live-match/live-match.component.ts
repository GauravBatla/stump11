import { Component, OnInit } from '@angular/core';
import { EntitySportService } from '../entiy-sports.service';

@Component({
  selector: 'app-live-match',
  templateUrl: './live-match.component.html',
  styleUrls: ['./live-match.component.scss']
})
export class LiveMatchComponent implements OnInit {
   matchdata:any;
   liveMatchView:boolean = false
   
  constructor(private _http:EntitySportService) { }

  ngOnInit(): void {
 this.getLiveMatch()
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
