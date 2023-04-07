import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  mealForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private mealService: MealService) {
    this.mealForm = this.formBuilder.group({
      description: ['']
    });
  }

  ngOnInit(){
    this.buttonText = "➕";
  }

  addVouch(meal: Meal) {
    const mealId = meal["_id"];

    if (this.buttonText === '➕') {

      const data = {
        _id: meal._id,
        title: meal.title,
        text: meal.text,
        vouch: meal.vouch+1,
        imageUrl: meal.imageUrl      
      }
      console.log(data);
      this.buttonText = '✖️';
      this.mealService.updateMeal(mealId, data).subscribe(()=>{});

    } else {

      const data = {
        _id: meal._id,
        title: meal.title,
        text: meal.text,
        vouch: meal.vouch-1,
        imageUrl: meal.imageUrl      
      }  
      this.buttonText = '➕';
      this.mealService.updateMeal(mealId, data).subscribe(()=>{});
    }
  }

  deleteMeal(meal: Meal){
    const mealId = meal["_id"]; // retreive the unique id for the note
    //const index: number = this.meal.indexOf(meal); // get the index of the note

    this.mealService.deleteMeal(mealId).subscribe(() => {});
  }

  editMeal(meal: Meal){
    const mealId = meal["_id"];

    const data = {
      _id: meal._id,
      title: meal.title,
      text: this.mealForm.value.description,
      vouch: meal.vouch,
      imageUrl: meal.imageUrl
    }

    this.mealService.updateMeal(mealId, data).subscribe(() => {});
  }
}
