import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  
  signUpForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){
    this.signUpForm = this.formBuilder.group({
      email: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  ngOnInit(): void {
      
  }

  signUp(): void {
    const loginCredentials = this.signUpForm.value;
  }
}
