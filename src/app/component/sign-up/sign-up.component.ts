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

  signup(): void {
    const signupCredentials = this.signUpForm.value;
    //console.log(`[INFO] Signup credentials: ${JSON.stringify(signupCredentials)}`);

    const email = signupCredentials.email;
    const password = signupCredentials.password;
    const confirmPassword = signupCredentials.confirmPassword;

    if(email){

      if(password === confirmPassword){

        this.authService.signUp(email, password)
                        .subscribe((value) => {
                            // TODO: explain this section later
                            localStorage.setItem("token", value["token"]);
                            this.router.navigateByUrl("/meals");
                        });

      }else{
        alert("Password doesn't match");
      }

    }else{
      alert("Please add an email address");
    }

}
}
