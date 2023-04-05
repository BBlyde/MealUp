import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal.model';
import { MealService } from '../../services/meal.service';

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

  addVouch(meal: Meal) {
    if (this.buttonText === '➕') {

      const data = {
        _id: meal._id,
        title: meal.title,
        text: meal.text,
        vouch: meal.vouch++,
        imageUrl: meal.imageUrl      
      }
      this.buttonText = '✖️';
      this.mealService.updateMeal(meal._id, data).subscribe(()=>{});

    } else {

      const data = {
        _id: meal._id,
        title: meal.title,
        text: meal.text,
        vouch: meal.vouch--,
        imageUrl: meal.imageUrl      
      }  
      this.buttonText = '➕';
      this.mealService.updateMeal(meal._id, data).subscribe(()=>{});
    }
  }

  deleteMeal(meal: Meal){
    const mealId = meal["_id"]; // retreive the unique id for the note
    //const index: number = this.meal.indexOf(meal); // get the index of the note

    this.mealService.deleteMeal(mealId).subscribe(() => {});
  }
}
