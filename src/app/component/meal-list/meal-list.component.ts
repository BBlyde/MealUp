import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal.model';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit{

  meals!: Meal[];

  constructor(private mealService: MealService) { }

  ngOnInit(){
    this.meals = this.mealService.getAllMeals();
  }

}
