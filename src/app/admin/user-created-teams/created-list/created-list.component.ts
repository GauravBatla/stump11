import { Component, OnInit } from '@angular/core';
import { CreateTeamService } from '../servie/create-team.service';

@Component({
  selector: 'app-created-list',
  templateUrl: './created-list.component.html',
  styleUrls: ['./created-list.component.css']
})
export class CreatedListComponent implements OnInit {

  data:any
  constructor(private teamService :CreateTeamService) { }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  ngOnInit(): void {
    this.teamList()
  }

  teamList(){
    this.teamService.TeamList().subscribe((res:any)=>{
      this.data = res.data
      console.log(res);
      
    })
  }
}
