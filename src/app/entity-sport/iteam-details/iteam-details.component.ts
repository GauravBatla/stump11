import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CreateContestComponent } from '../create-contest/create-contest.component';
import { CreateIteamComponent } from '../create-iteam/create-iteam.component';
import { EntitySportService } from '../entiy-sports.service';

@Component({
  selector: 'app-iteam-details',
  templateUrl: './iteam-details.component.html',
  styleUrls: ['./iteam-details.component.css']
})
export class IteamDetailsComponent implements OnInit {
  item:any;
  id:any;
  form:any
  constructor(private route:ActivatedRoute,private _http:EntitySportService,public dialog: MatDialog,) {
   
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userDetails(this.id)
   
  }

  userDetails(id:any){
    this._http.matchdetails(id).subscribe((res:any)=>{
      console.log(res);
      
this.item = res.response;
console.log(this.item);
this.openDialog(this.item)
    });
  }

  openDialog(iteam:any) {
    const dialogRef = this.dialog.open(CreateContestComponent,{
      data:iteam
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
