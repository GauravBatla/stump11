import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCouponComponent } from '../add-edit-coupon/add-edit-coupon.component';
import { CouponService } from '../service/coupon.service';

@Component({
  selector: 'app-coupon-table',
  templateUrl: './coupon-table.component.html',
  styleUrls: ['./coupon-table.component.css']
})
export class CouponTableComponent implements OnInit {

  constructor(private couponService: CouponService, public dialog: MatDialog) { }
  data: any
  p: any
  test: any = {}
  ngOnInit(): void {
    this.couponList('active')
  }

  onAdd() {
    const dialogRef = this.dialog.open(AddEditCouponComponent, {
      data: {
        status: 'status',
        data: this.test
      },
      width: '70%',
      height: '90%',

    });

    dialogRef.afterClosed().subscribe((res) => {
      // this.products();
      this.couponList('active')

    })
  };

  onUpdate(data: any) {
    const dialogRef = this.dialog.open(AddEditCouponComponent, {
      data: {
        update: true,
        data: data

      },
      width: '70%',
      height: '90%',

    });

    dialogRef.afterClosed().subscribe((res) => {

      // this.products();
      this.couponList('active')

    })
  };

  couponList(status: any) {
    this.couponService.couponsList(status).subscribe((res: any) => {
      this.data = res.data
      console.log(this.data);

    }, (err) => {
      console.log(err);

    })
  }



}
