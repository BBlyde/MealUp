import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import type { Observable } from 'rxjs';
import type { Meal, MealCreateRequest } from './meals/meal.model';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'http://localhost:8080/api';

    /**
     * Retrieves the list of meals.
     * 
     * @returns An observable containing the list of meals.
     */
    getMeals(): Observable<Meal[]> {
        return this.http.get<Meal[]>(`${this.baseUrl}/meals`);
    }

    /**
     * Creates a new meal.
     * 
     * @param meal The meal creation request.
     * @returns An observable containing the created meal.
     */
    createMeal(meal: MealCreateRequest): Observable<Meal> {
        return this.http.post<Meal>(`${this.baseUrl}/meals`, meal);
    }
}