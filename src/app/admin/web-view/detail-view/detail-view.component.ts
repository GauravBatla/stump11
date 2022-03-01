import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebViewService } from '../service/web-view.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  id: any
  data: any

  constructor(private route: ActivatedRoute, private webService: WebViewService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id, "id");
    this.getViewDetail(this.route.snapshot.paramMap.get('id'))
  }

  getViewDetail(id: any) {
    this.webService.getViewDetail(id).subscribe((res: any) => {
      if (res) {
        console.log(this.id, "id +");
        console.log(res, "jkbl");
        this.data = res.data
        console.log(res);
      }
    }, (err) => {
      console.log(err);
    })
  }
}
