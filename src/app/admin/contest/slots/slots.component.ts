import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { ContestService } from '../contestService/contest.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {
  temp_length: any
  form: any;
  catList: any
  msg: any = {}
  temp: any
  constructor(private contestService: ContestService, private fb: FormBuilder) {
    // this.form = this.fb.group({
    //   slotNumber: new FormControl(null, [Validators.required]),
    //   contestType: new FormControl(null, [Validators.required]),
    //   prizePool: this.fb.array([]),
    // });
  }

  formcreate() {
    this.form = this.fb.group({
      slotNumber: new FormControl(null, [Validators.required]),
      contestType: new FormControl(null, [Validators.required]),
      prizePool: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.formcreate()
    this.contestCategoryList()
  }

  contestCategoryList() {
    this.contestService.categoryList().subscribe((res: any) => {
      this.catList = res.data
    })
  }
  add(e: any) {
    this.temp_length = e.target.value
    const test = this.form.get('slotNumber');
    if (this.temp_length > 251) {
      this.msg['error'] = "invalid input"
    } else {
      test?.disable()
      for (let i = 1; i < this.temp_length; i++) {
        this.addCreds()
      }
      // this.addCreds()
    }
  }

  addCreds() {
    const creds = this.form.controls.prizePool as FormArray;
    console.log('====================================');
    console.log(creds.length);
    console.log('====================================');
    creds.push(
      this.fb.group({
        rank: '',
        percent: 0,
      })
    );
  }


  addContest() {
    if (this.form.valid) {
      const test = this.form.get('slotNumber');
      test?.enable()
      console.log(this.form.value);
      this.contestService.addSlots(this.form.value).subscribe((res: any) => {
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
