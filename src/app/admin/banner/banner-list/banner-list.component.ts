import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBannerComponent } from '../add-banner/add-banner.component';
import { BannerService } from '../bannerService/banner.service';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.css']
})
export class BannerListComponent implements OnInit {
  data: any
  p: any
  constructor(public dialog: MatDialog, private bannerService: BannerService) { }

  ngOnInit(): void {
    this.bannerList()
  }

  addBanner() {
    const dialogRef = this.dialog.open(AddBannerComponent, {
      data: {
        status: 'status',
        // data: this.test
      },
      width: '60%',
      height: '70%',
    });

    dialogRef.afterClosed().subscribe((res) => {

    })
  };

  bannerList() {
    this.bannerService.bannerList().subscribe((res: any) => {
      this.data = res.data
    })
  }
}
