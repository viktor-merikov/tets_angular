import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: FormControl;

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  }


  login() {
    const { value } = this.username;
    if (value) {
      localStorage.setItem('username', value);
      this.router.navigate(['/main']);
    }
  }

}
