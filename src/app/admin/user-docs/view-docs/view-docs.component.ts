import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocsService } from '../DocumentService/docs.service';

@Component({
  selector: 'app-view-docs',
  templateUrl: './view-docs.component.html',
  styleUrls: ['./view-docs.component.css']
})
export class ViewDocsComponent implements OnInit {

  name: any
  type: any
  image: any
  id: any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private docsService: DocsService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.type = this.data.type
    this.image = this.data.image_path
  }

  update() {
    let options = {
      panCardImageVerfiy: this.name,
      _id: this.data.id
    }
    // console.log(this.name);
    // this.dialog.closeAll()
    this.docsService.approvedUserDocs(options).subscribe((res: any) => {
      if (res) {
        console.log(res);
        
        this.dialog.closeAll()
      }
    }, (err: any) => {
      console.log(err);

    })
  }
}
