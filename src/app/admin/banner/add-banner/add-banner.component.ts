import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BannerService } from '../bannerService/banner.service';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent implements OnInit {

  msg:any = {}
  constructor(private bannerService :BannerService) { }
  images:any
  ngOnInit(): void {
  }

  // addBanner = new FormControl({
  //   images:
  // })
  onClick(){
    console.log(this.images);
    if(this.images){
      this.bannerService.AddCBanner({images:this.images}).subscribe((res:any)=>{
        this.msg['success'] = "added successfully"
      },((err:any)=>{
        this.msg['success'] = "something went wrong"
      }))
    }
    
  };

  onFileChanged(event: any) {
    // this.selectedFile = event.target.files[0]
    // console.log(this.selectedFile, this.selectedFile.name, '==========');

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (e) => {
      this.images = (<FileReader>e.target).result;
      console.log(this.images);

    }
    // this.addCoupon.setValue({ image_path: this.image })
  };
}
