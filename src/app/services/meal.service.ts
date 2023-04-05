import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Meal } from 'src/app/models/meal.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MealService {

  meals: Meal[] = [];

  private apiUrl = "https://localhost:13000/api/v1/meals";

  constructor(private http: HttpClient){

  }

  handleError(error: HttpErrorResponse){
    let errorMessage = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status} \t Message: ${error.message}]`
    }

    return throwError(() => errorMessage);
  }

  // add new meal
  addMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(this.apiUrl, meal, httpOptions).pipe(catchError(this.handleError));
  }

  // retrieve all available meals
  getMeals(): Observable<Meal []>{
    return this.http.get<Meal []>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // update existing meal
  updateMeal(id: any, data: any): Observable<Meal>{
    let url = `${this.apiUrl}/${id}`;
    return this.http.put<Meal>(url, data, httpOptions).pipe(catchError(this.handleError));
  };

  // delete existing meal
  deleteMeal(id: any): Observable<Meal>{
    let url = `${this.apiUrl}/${id}`;
    return this.http.delete<Meal>(url, httpOptions).pipe(catchError(this.handleError));
  }

  // vouch a meal
  vouchMeal(id: any, vouch: any): Observable<Meal> {
    let url = `${this.apiUrl}/${id}`;
    return this.http.put<Meal>(url, vouch, httpOptions).pipe(catchError(this.handleError));
  }
}