import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-contest',
  templateUrl: './create-contest.component.html',
  styleUrls: ['./create-contest.component.css']
})
export class CreateContestComponent implements OnInit {
  form: any
  temp: any;
  catList: any;
  angForm = new FormGroup({
    names: new FormArray([
      new FormControl('', Validators.required),
      new FormControl('', Validators.required),
    ])
  });


  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      categorieId: new FormControl(null, [Validators.required]),
      totalMember: new FormControl(null, [Validators.required]),
      entryPrice: new FormControl(null, [Validators.required]),
      contestType: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      ranks: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    console.log(this.data);

  }

  contestCategoryList() {
    // this.contestService.categoryList().subscribe((res: any) => {
    //   this.catList = res.data
    // })
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

    // if (this.form.valid) {

    //   this.contestService.AddContest(this.form.value).subscribe((res: any) => {
    //     if (res) {
    //       console.log(res);
    //       //this.form.reset() 
    //     }
    //   }, ((err) => { 
    //     if (err) {
    //       console.log(err);
    //     }
    //   }))
  }


  get names(): FormArray {
    return this.angForm.get('names') as FormArray;
  }
  onFormSubmit(): void {
    for (let i = 0; i < this.names.length; i++) {
      console.log(this.names.at(i).value);
    }
  }
  addNameField() {
    this.names.push(new FormControl('', Validators.required));
  }

  deleteNameField(index: number) {
    if (this.names.length !== 1) {
      this.names.removeAt(index);
    }
    console.log(this.names.length);
  }


}
