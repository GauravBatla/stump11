import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContestComponent } from '../add-contest/add-contest.component';
import { ContestService } from '../contestService/contest.service';

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {

  constructor(private ContestService: ContestService, public dialog: MatDialog) { }
  data: any
  p: any
  test: any = {}
  ngOnInit(): void {
    this.contestList()
  }

  addContest() {
    const dialogRef = this.dialog.open(AddContestComponent, {
      data: {
        status: 'status',
        data: this.test
      },
      width: '80%',
      height: '80%',
    });

    dialogRef.afterClosed().subscribe((res) => {
      // this.products();
      // this.getCatList()

      // this.couponList('active')

    })
  };

  // CatUpdate() {
  //   const dialogRef = this.dialog.open(ContestAddCategorieComponent, {
  //     data: {
  //       status: 'status',
  //       data: this.test
  //     },
  //     width: '40%',
  //     height: '60%',

  //   });

  //   dialogRef.afterClosed().subscribe((res) => {
  //     // this.products();
  //     this.getCatList()

  //     // this.couponList('active')

  //   })
  // };

  contestList() {
    this.ContestService.contestList().subscribe((res: any) => {
      if (res) {
        this.data = res.data
      }
    })
  }
}