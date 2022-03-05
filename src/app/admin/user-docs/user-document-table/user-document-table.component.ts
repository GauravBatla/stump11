import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocsService } from '../DocumentService/docs.service';
import { ViewDocsComponent } from '../view-docs/view-docs.component';

@Component({
  selector: 'app-user-document-table',
  templateUrl: './user-document-table.component.html',
  styleUrls: ['./user-document-table.component.css']
})
export class UserDocumentTableComponent implements OnInit {
  data: any
  p: any
  constructor(private userDocsService: DocsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDoucumentList()
  };


  getDoucumentList() {
    this.userDocsService.userDocsList().subscribe((res: any) => {
      this.data = res.data1
      console.log(this.data);
    })
  }

  openDialog(docType: any , image_path:any,id:any) {
    const dialogRef = this.dialog.open(ViewDocsComponent, {
      data: {
        type: docType,
        image_path:image_path,
        id:id
      },
      width: '80%',
      height: '90%',
    });

    dialogRef.afterClosed().subscribe((res) => {
      // this.products();
      this.getDoucumentList()

    })
  };

}
