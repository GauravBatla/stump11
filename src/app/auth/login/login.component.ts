import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: any = {}
  adminLogin = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(3)])
  })
  constructor(private loginService: AuthServiceService, private route: Router) { }

  ngOnInit(): void {
  }

  login() {    
    if (this.adminLogin.valid) {
      this.loginService.login(this.adminLogin.value).subscribe((res: any) => {
        console.log(res + "hgcjkn");
        this.loginService.userData.next(res.accessToken) // = res.accessToken
        this.loginService.userData.subscribe((data: any) => {
          // console.log('HERE:    ', data);
          localStorage.setItem('token', res.accessToken)
          //  this.route.navigate(['/'])
          window.location.href = '/'
        });
      }, (err) => {
        let msg = err.error.errors[0].msg ? err.error.errors[0].msg : null;
        
        // console.log(msg);
        this.msg['error'] = msg
      })
    }
  }
}
