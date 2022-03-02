import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { ContestService } from '../contestService/contest.service';

@Component({
  selector: 'app-add-contest',
  templateUrl: './add-contest.component.html',
  styleUrls: ['./add-contest.component.css']
})
export class AddContestComponent implements OnInit {

  form: FormGroup;
  catList: any
  temp:any
  constructor(private contestService: ContestService, private fb: FormBuilder) {
    this.form = this.fb.group({
      categorieId: new FormControl(null, [Validators.required]),
      totalMember: new FormControl(null, [Validators.required]),
      entryPrice: new FormControl(null, [Validators.required]),
      contestType: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
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
  percentCalculation(number:any, percent:any){
     this.temp = (parseFloat(number)*parseFloat(percent))/100; 
  }
  

  addContest() {
   
    if (this.form.valid) {

      this.contestService.AddContest(this.form.value).subscribe((res: any) => {
        if (res) {
          console.log(res);
          //this.form.reset() 
        }
      }, ((err) => { 
        if (err) {
          console.log(err);
        }
      }))
    }

    
  }

  

}
