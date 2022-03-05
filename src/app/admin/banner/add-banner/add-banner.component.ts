import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BannerService } from '../bannerService/banner.service';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent implements OnInit {

  formError: any = {}
  msg: any = {}
  constructor(private bannerService: BannerService, public dialog: MatDialog) { }
  images: any
  ngOnInit(): void {
  }

  // addBanner = new FormControl({
  //   images:
  // })

  onClick() {
    // console.log(this.images);
    if (this.images) {
      this.bannerService.AddCBanner({ images: this.images }).subscribe((res: any) => {
        this.msg['success'] = "added successfully"
        this.dialog.closeAll()
      }, ((err: any) => {
        console.log(err, "error");
        const errors: any = err.error.errors;
        errors.map((x: any) => {
          this.formError[x.param] = x.msg

        })
        // console.log(this.formError);

      }))
    }
  };

  onFileChanged(event: any) {

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (e) => {
      this.images = (<FileReader>e.target).result;
      // console.log(this.images);

    }
    // this.addCoupon.setValue({ image_path: this.image })
  };
}
