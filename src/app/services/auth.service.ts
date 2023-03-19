import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  // create a new user
  signUp(email: string, password: string){
    return this.http.post<any>("api/v1/sign-up", {email, password});
  }

  // verify an existing user
  login(email: string, password: string){
    return this.http.post<any>("api/v1/login", {email, password});
  }

  loggedIn(){

  }

  loggedOut(){

  }

  getToken(){
    
  }
}
