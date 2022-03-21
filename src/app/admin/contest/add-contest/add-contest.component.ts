import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { EntitySportService } from 'src/app/entity-sport/entiy-sports.service';
import { ContestService } from '../contestService/contest.service';

@Component({
  selector: 'app-add-contest',
  templateUrl: './add-contest.component.html',
  styleUrls: ['./add-contest.component.css']
})
export class AddContestComponent implements OnInit {
  matchdata: any
  test: [] = []
  formError: any = {};
  form: FormGroup;
  catList: any
  temp: any
  msg: any = {}
  match_title: any
  teamA_tittle: any = {}
  teamB_tittle: any = {}
  constructor(private contestService: ContestService, private fb: FormBuilder, private _http: EntitySportService) {
    this.form = this.fb.group({
      categorieId: new FormControl(null, [Validators.required]),
      totalMember: new FormControl(null, [Validators.required]),
      match_id: new FormControl(null, [Validators.required]),
      entryPrice: new FormControl(null, [Validators.required]),
      contestType: new FormControl(null, [Validators.required]),
      winningPrice: new FormControl(null, [Validators.required]),
      winningPercentUser: new FormControl(null, [Validators.required]),
      ranks: this.fb.array([]),
    });
  }


  // <!-- 
  // "categorieId":"621cb7cf6f104ed060f2b064",
  // "totalMember":"500",
  // "entryPrice":"10",
  // "contestType":"bjb,knjk",
  // "price":100, -->

  ngOnInit(): void {
    this.contestCategoryList()
    this.getUpcomingMatch()
  }

  contestCategoryList() {
    this.contestService.categoryList().subscribe((res: any) => {
      this.catList = res.data
    })
  }


  addCreds() {
    const creds = this.form.controls.ranks as FormArray;
    creds.push(
      this.fb.group({
        rank: '',
        percent: 0,
      })
    );
  }
  percentCalculation(number: any, percent: any) {
    this.temp = (parseFloat(number) * parseFloat(percent)) / 100;
  }


  addContest() {
    this.form.value['title'] = this.match_title
    this.form.value['teamA_tittle'] = this.teamA_tittle
    this.form.value['teamB_tittle'] = this.teamB_tittle
    console.log(this.form.value);
    console.log(this.matchdata[0].teamA, "???");

    if (this.form.valid) {

      this.contestService.AddContest(this.form.value).subscribe((res: any) => {
        if (res) {
          console.log(res);
          this.form.reset()
        }
      }, ((err) => {
        if (err) {
          if (err.error.errors) {

            const errors: any = err.error.errors;
            errors.map((x: any) => {
              this.formError[x.param] = x.msg
            })
            console.log(this.formError);
          }
          console.log('====================================');
          console.log(err);
          console.log('====================================');
        }
      }))
    }
  }

  add(e: any) {
    this.teamA_tittle = this.matchdata.filter((item: any) => {
      return item.title == e.target.options[e.target.selectedIndex].text

      // console.log(item.title == e.target.options[e.target.selectedIndex].text);

    })
    this.teamB_tittle = this.matchdata.filter((item: any) => {
      if ( item.title == e.target.options[e.target.selectedIndex].text) {
      return item.teamb
        
      }
      //  item.title == e.target.options[e.target.selectedIndex].text
      // console.log(item.title == e.target.options[e.target.selectedIndex].text);

    })
    this.teamA_tittle = this.teamA_tittle[0].teama.short_name
    this.teamB_tittle = this.teamB_tittle[0].teamb.short_name
    console.log(this.teamA_tittle,"team A" );
    console.log(this.teamB_tittle, "team B");

    console.log(this.matchdata[0].teama.short_name, "?");

    // console.log(teamA_tittle.teama);
    this.match_title = e.target.options[e.target.selectedIndex].text
    // console.log(item);

  }
  getUpcomingMatch() {
    // this.liveMatchView = false
    this._http.LiveMatchApi(100, 1).subscribe((res: any) => {

      this.matchdata = res.response.items;
      console.log(this.matchdata);

    })
  }

  some(data: any) {
    console.log(data, "dfv");
  }

}
