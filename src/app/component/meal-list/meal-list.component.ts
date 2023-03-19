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

  /*editMeal(meal: Meal) {
    //console.log("[INFO] You clicked, editing meal now");

    // send data from the note component into the add-note component
    this.mealForm.setValue({
      id: note["id"],
      title: note["title"],
      text: note["text"]
    })
    
    this.uiService.toggleEditNoteData(this.noteForm.value);
  }*/

  deleteMeal(meal: Meal){
    const mealId = meal["id"];
    const index: number = this.meals.indexOf(meal);
    this.mealService.deleteMeal(mealId).subscribe(() => this.meals.splice(index, 1));
  }

  addMeal(meal: Meal){
    const mealId = meal["id"];
    const canEditMeal = mealId ? true : false;

    if(canEditMeal){    // edit an existing meal
      const data = {
        meal: meal.title,
        description: meal.description
      }
      this.mealService.updateMeal(mealId, data)
                      .subscribe(() => {
                        let index = this.meals.findIndex( item => item["id"] == meal.id);
                        this.meals[index].title = meal.title;
                        this.meals[index].description = meal.description;
                        //console.log("Record updated!"); // remove prints in production
                      });
    }else{    // add a new meal
      this.mealService.addMeal(meal).subscribe((meal: Meal) => (this.meals.push(meal)));
    }
    
    this.refreshPage();
  }

  refreshPage() {
    this.location.replaceState(this.location.path());
    window.location.reload();
  }
}
