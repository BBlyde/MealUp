import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  resetPasswordForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){
    this.resetPasswordForm = this.formBuilder.group({
      email: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  ngOnInit(): void {
      
  }

  resetPassword(): void{
    const signupCredentials = this.resetPasswordForm.value;
    const password = signupCredentials.password;
    const confirmPassword = signupCredentials.confirmPassword;

    if(password === confirmPassword){
      this.authService.resetPassword(password).subscribe((value) => {
        localStorage.setItem("token", value["token"]);
        this.router.navigateByUrl("/meals");
      });
    }else{
      alert("Password doesn't match");
    }
  }

}
