import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
      
  }

  login(): void {
    const loginCredentials = this.loginForm.value;
    /*const email = loginCredentials.email;
    const password = loginCredentials.password;

    if(email && password){
      this.authService.login(email, password)
      .subscribe((value) => {

        // TODO: Grab the token generated from the server
        localStorage.setItem('token', value["token"]);
        this.router.navigateByUrl("/notes");
      });
      
    }else{
      alert("Missing Email or Password");
    }*/
  }
}
