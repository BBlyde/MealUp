import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "https://localhost:13000/api/v1";

  constructor(private http: HttpClient, private router: Router) {}

  // create a new user
  signUp(email: string, password: string){
    return this.http.post<any>(`${this.apiUrl}/sign-up`, {email, password});
  }

  // verify an existing user
  login(email: string, password: string){
    return this.http.post<any>(`${this.apiUrl}/login`, {email, password});
  }

  // check if token is available
  getToken(){
    return localStorage.getItem("token");
  }

  logOut(){
     localStorage.removeItem("token");
     this.router.navigateByUrl("/login");
  }

  // reset password
  resetPassword(password: string){
    return this.http.post<any>(`${this.apiUrl}/reset-password`, {password});
  }
}
