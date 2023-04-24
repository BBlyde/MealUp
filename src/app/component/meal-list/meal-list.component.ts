import { Location } from '@angular/common';
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

  constructor(private mealService: MealService, private router: Router, private authService: AuthService, private location: Location) {
    this.mealService.getMeals().subscribe({
      next: (meals: Meal[]) => this.meals = meals,
      error: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigateByUrl("login");
          }
        } else {
          this.authService.logOut();
        }
      }
    });
  }

  ngOnInit(){
    
  }

  addMeal(meal: Meal){
    const mealId = meal["_id"];
    const canEditMeal = mealId ? true : false;

    if(canEditMeal){    // edit an existing meal
      const data = {
        meal: meal.title,
        text: meal.text
      }
      this.mealService.updateMeal(mealId, data)
                      .subscribe(() => {
                        let index = this.meals.findIndex( item => item["_id"] == meal._id);
                        this.meals[index].title = meal.title;
                        this.meals[index].text = meal.text;
                      });
    }else{    // add a new meal
      this.mealService.addMeal(meal).subscribe((meal: Meal) => (this.meals.push(meal)));
    }
    
    window.location.reload();
  }
}
