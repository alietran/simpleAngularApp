import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),

    });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    const email = "admin@gmail.com";
    const password = "123456";
    if(email === this.loginForm.value.email && password === this.loginForm.value.password){
      this.router.navigate(['admin']);
      localStorage.setItem("isLogin", "true");
    }

  }
}

