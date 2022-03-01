import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../userService/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  card = false
  id: any
  data: any
  p:any
  constructor(private userService: UserService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userDetails()
  }

  userDetails() {
    this.userService.userDetails(this.id).subscribe((res: any) => {
      this.data = res.data[0]
      if (res) {
        console.log(res);

      }
    })
  }
}
