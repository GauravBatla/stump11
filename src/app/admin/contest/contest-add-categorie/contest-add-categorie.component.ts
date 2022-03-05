import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContestService } from '../contestService/contest.service';

@Component({
  selector: 'app-contest-add-categorie',
  templateUrl: './contest-add-categorie.component.html',
  styleUrls: ['./contest-add-categorie.component.css']
})
export class ContestAddCategorieComponent implements OnInit {
  msg: any = {}
  addData: any = true
  update: any = false
  constructor(private contestService: ContestService, @Inject(MAT_DIALOG_DATA) public data: any , public dialog: MatDialog) {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    if (this.data.update) {
      this.addData = false
      this.update = true
    }
  }
  ngOnInit(): void {
  }

  addCat = new FormGroup({
    title: new FormControl(this.data.data.title ? this.data.data.title : null, [Validators.required])
  });


  add() {
    if (this.addCat.valid) {
      console.log(this.addCat.value);
      this.contestService.AddCategory(this.addCat.value).subscribe((res: any) => {
        if (res) {
          console.log(res);
          this.msg['success'] = "Added Succesfully"
          this.dialog.closeAll()
        }
      },
        ((err: any) => {
          console.log(err);
        }))
    }
  };

  updateCat() {
    if (this.addCat.valid) {
      this.contestService.updateCat(this.addCat.value, this.data.data._id).subscribe((res: any) => {
        if (res) {
          this.msg['success'] = "Updated SuccessFully"
          this.dialog.closeAll()
        }
      }, (err: any) => {
        console.log(err);

      })
    }
  }

}

