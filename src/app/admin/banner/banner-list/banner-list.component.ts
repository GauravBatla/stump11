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
        status: 'add'
        // data: this.test
      },
      width: '60%',
      height: '70%',
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.bannerList()

    })
  };

  bannerList() {
    this.bannerService.bannerList().subscribe((res: any) => {
      this.data = res.data
      console.log('====================================');
      console.log(this.data);
      console.log('====================================');
    })
  }

  bannerUpdate(data: any) {
    const dialogRef = this.dialog.open(AddBannerComponent, {
      data: {
        status: 'update',
        data: data,
        update: true
      },
      width: '60%',
      height: '70%',
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.bannerList()
    })
  }


}
