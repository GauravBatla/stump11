import { Component, OnInit } from '@angular/core';
import { ContestService } from '../contestService/contest.service';

@Component({
  selector: 'app-add-contest',
  templateUrl: './add-contest.component.html',
  styleUrls: ['./add-contest.component.css']
})
export class AddContestComponent implements OnInit {

  catList: any
  constructor(private contestService: ContestService) { }

  ngOnInit(): void {
    this.contestCategoryList()
  }

  contestCategoryList() {
    this.contestService.categoryList().subscribe((res: any) => {
      this.catList = res.data
    })
  }

}
