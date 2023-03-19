import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/models/meal.model';
import { AuthService } from 'src/app/services/auth.service';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit{

  meals!: Meal[];

  constructor(private mealService: MealService, private router: Router, private authService: AuthService) {
    this.mealService.getMeals().subscribe({
      next: (meals: Meal[]) => this.meals = meals,
      error: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigateByUrl("login");
          }
        } else {
          this.authService.loggedOut();
        }
      }
    });
  }

  ngOnInit(){
    
  }

  addMeal(meal: Meal){
    this.mealService.addMeal(meal).subscribe((meal: Meal) => (this.meals.push(meal)));
  }
}
