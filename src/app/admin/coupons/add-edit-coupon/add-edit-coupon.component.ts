import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CouponService } from '../service/coupon.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-add-edit-coupon',
  templateUrl: './add-edit-coupon.component.html',
  styleUrls: ['./add-edit-coupon.component.css']
})
export class AddEditCouponComponent implements OnInit {

  addData = true

  update: any = false

  showImage: any
  show_banner: any
  image: any
  banner_image: any
  selectedFile: any
  start_date: any

  constructor(private CouponService: CouponService, @Inject(MAT_DIALOG_DATA) public data: any) {
    if (this.data.update) {
      this.addData = false
      this.update = true
    }
  }

  ngOnInit(): void {
    console.log(this.addData);
    console.log(this.data.data._id);
    this.showImage = this.data.data.image_path
    this.show_banner = this.data.data.banner_path
    this.start_date = this.data.data.start_date
  };


  addCoupon = new FormGroup({
    title: new FormControl(this.data.data.title ? this.data.data.title : null, [Validators.required]),
    image_path: new FormControl(this.data.data.image_path ? this.data.data.image_path : null, [Validators.required]),
    price: new FormControl(this.data.data.title ? this.data.data.title : null, [Validators.required]),
    start_date: new FormControl(this.data.data.start_date ? this.data.data.start_date : null, [Validators.required]),
    expiry_date: new FormControl(this.data.data.expiry_date ? this.data.data.expiry_date : null, [Validators.required]),
    user_used_count: new FormControl(this.data.data.user_used_count ? this.data.data.user_used_count : null, [Validators.required]),
    banner_path: new FormControl(this.data.data.banner_path ? this.data.data.banner_path : null, [Validators.required]),
    terms_conditions: new FormControl(this.data.data.terms_conditions ? this.data.data.terms_conditions : null, [Validators.required]),
    description: new FormControl(this.data.data.description ? this.data.data.description : null, [Validators.required]),
  })


  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  add() {
    if (this.addCoupon.valid) {
      delete this.addCoupon.value['image_path']
      delete this.addCoupon.value['banner_path']
      this.addCoupon.value['image_path'] = this.image
      this.addCoupon.value['banner_path'] = this.banner_image
      this.CouponService.AddCoupon(this.addCoupon.value).subscribe((res: any) => {
        console.log(res);
        this.addCoupon.reset()
      }, (err) => {
        console.log(err);

      })
    }
  };


  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile, this.selectedFile.name, '==========');

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (e) => {
      this.image = (<FileReader>e.target).result;
      console.log(this.image);

    }
    this.addCoupon.setValue({ image_path: this.image })
  };


  onFilChanged(event: any) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile, this.selectedFile.name, '=====BANNER =====');

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (e) => {
      this.banner_image = (<FileReader>e.target).result;
      console.log(this.banner_image);

    }
    this.addCoupon.setValue({ banner_image: this.banner_image })
  };

  updateCoupon() {
    console.log(this.addCoupon.value);

  }

}
