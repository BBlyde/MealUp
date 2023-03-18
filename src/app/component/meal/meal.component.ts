import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal.model';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit{

  @Input() meal!: Meal;

  buttonText!: string;

  constructor(private mealService: MealService) {}

  ngOnInit(){
    this.buttonText = "➕";
  }

  onAddVouch() {
    if (this.buttonText === '➕') {
      this.mealService.vouchMealById(this.meal.id, 'vouch');
      this.buttonText = '✖️';
    } else {
      this.mealService.vouchMealById(this.meal.id, 'unvouch');
      this.buttonText = '➕'
    }
  }
}
