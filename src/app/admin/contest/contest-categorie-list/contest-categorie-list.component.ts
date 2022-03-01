import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContestAddCategorieComponent } from '../contest-add-categorie/contest-add-categorie.component';
import { ContestService } from '../contestService/contest.service';

@Component({
  selector: 'app-contest-categorie-list',
  templateUrl: './contest-categorie-list.component.html',
  styleUrls: ['./contest-categorie-list.component.css']
})
export class ContestCategorieListComponent implements OnInit {


  constructor(private ContestService: ContestService, public dialog: MatDialog) { }
  data: any
  p: any
  test: any = {}
  ngOnInit(): void {
    this.getCatList()
  }

  addCat() {
    const dialogRef = this.dialog.open(ContestAddCategorieComponent, {
      data: {
        status: 'status',
        data: this.test
      },
      width: '40%',
      height: '60%',

    });

    dialogRef.afterClosed().subscribe((res) => {
      // this.products();
    this.getCatList()

      // this.couponList('active')

    })
  };
  CatUpdate() {
    const dialogRef = this.dialog.open(ContestAddCategorieComponent, {
      data: {
        status: 'status',
        data: this.test
      },
      width: '40%',
      height: '60%',

    });

    dialogRef.afterClosed().subscribe((res) => {
      // this.products();
    this.getCatList()

      // this.couponList('active')

    })
  };

  getCatList(){
    this.ContestService.categoryList().subscribe((res:any)=>{
      if(res){
        this.data = res.data
      }
    })
  }

}
