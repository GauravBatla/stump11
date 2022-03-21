import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BannerService } from '../bannerService/banner.service';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent implements OnInit {

  formError: any = {}
  add = true
  msg: any = {}
  constructor(private bannerService: BannerService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }
  images: any
  showImg: any
  ngOnInit(): void {
    console.log('====================================');
    // console.log('data', this.data.data.images);
    if (this.data.update == true) {
      this.showImg = this.data.data.images
      // this.showImg = this.data.data.status
      this.add = false;

    }
    console.log(this.data);
  }

  onClick() {

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

  updateBaneers() {

  }


}
