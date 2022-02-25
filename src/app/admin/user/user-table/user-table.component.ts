import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { UserService } from '../userService/user.service';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit, AfterViewInit {

  p:any
  data: any
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userList()
  }
  ngAfterViewInit() {
    //  this.dataSource.paginator = this.paginator;
  }

  userList() {
    this.userService.userList().subscribe((res: any) => {
      if (res) {
        this.data = res.data
       console.log(res);

      }
    })
  }
  up(no:any){
    no = no+1
    return no
  }
  time = new Observable<Number>(observer => {
   // setInterval(() => observer.next(this.up(1)), 5000);
    setTimeout(() => observer.next(this.up(1)), 50);
  });
  
}
// }
