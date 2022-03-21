import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateTeamService } from '../servie/create-team.service';

@Component({
  selector: 'app-user-wining',
  templateUrl: './user-wining.component.html',
  styleUrls: ['./user-wining.component.css']
})
export class UserWiningComponent implements OnInit {

  msg: any = {}
  usersTeam: any
  data: any
  contest: any
  constructor(private _createTeamService: CreateTeamService) { }

  ngOnInit(): void {
    this.getList()
    this.winningList()
  }

  form = new FormGroup({
    userId: new FormControl(null, [Validators.required]),
    contestId: new FormControl(null, [Validators.required])
  })

  getList() {
    this._createTeamService.winningList().subscribe((res: any) => {
      this.usersTeam = res.usersTeam
      this.contest = res.contest
    })
  }

  winningList() {
    this._createTeamService.winningContestList().subscribe((res: any) => {
      if (res) {
        console.log(res);
        this.data = res.data

      }
    })
  }

  submit() {
    if (this.form.valid) {
      this._createTeamService.addWinningList(this.form.value).subscribe((res: any) => {
        if (res) {
          console.log(res);
          this.winningList()
          // this.form.reset()
        }
      }, (err) => {
        console.log(err);
        const errors: any = err.error.errors;
        if (errors) {
          errors.map((item: any) => {
            this.msg[item.param] = item.msg;
          })
        }
      })
    }
  }

}
