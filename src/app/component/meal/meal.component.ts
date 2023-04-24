import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Meal } from 'src/app/models/meal.model';
import { MealService } from '../../services/meal.service';
import { AuthService } from 'src/app/services/auth.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit{

  isOwner = false;

  @Input() meal!: Meal;

  buttonText!: string;

  mealForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private mealService: MealService, private authService: AuthService) {
    this.mealForm = this.formBuilder.group({
      description: ['']
    });
  }

  ngOnInit(){
    // Inits the meals with the correct button text
    if (this.hasAlreadyLiked() !== null) {
      this.buttonText = "✖️";
    } else {
      this.buttonText = "➕";
    }

    this.isOwner = this.isTheOwner();
  }
  
  hasAlreadyLiked() {
    // Get the user ID from the JWT token
    const token = this.authService.getToken();
    
    if (typeof token === 'string') {
      // Decode the JWT token to get the payload
      const payload = jwtDecode(token) as { subject: string };
      // Extract the user ID from the payload
      const userId = payload['subject'];

      if (this.meal.vouchedBy.includes(userId)) {
        return userId;
      }
    }
    return null;
  }

  isTheOwner() {
    // Get the user ID from the JWT token
    const token = this.authService.getToken();

    if (typeof token === 'string') {
      // Decode the JWT token to get the payload
      const payload = jwtDecode(token) as { subject: string };
      // Extract the user ID from the payload
      const userId = payload['subject'];
      
      if (this.meal.owner === userId) { 
        return true;
      }
    }
    return false;
  }

  addVouch(meal: Meal) {
    const mealId = meal["_id"];
    // Get the user ID from the JWT token
    const token = this.authService.getToken();
    
    if (typeof token === 'string') {
      // Decode the JWT token to get the payload
      const payload = jwtDecode(token) as { subject: string };
      // Extract the user ID from the payload
      const userId = payload['subject'];

      if (!this.meal.vouchedBy.includes(userId)) {
        meal.vouch+=1;
        meal.vouchedBy.push(userId);
        this.buttonText = '✖️';
        this.mealService.updateMeal(mealId, meal).subscribe(()=>{});
      } else {
        meal.vouch-=1;
  
        // Remove the user ID from the vouchedBy array
        const index = meal.vouchedBy.indexOf(userId);
        if (index > -1) {
          meal.vouchedBy.splice(index, 1);
        }
  
        this.buttonText = '➕';
        this.mealService.updateMeal(mealId, meal).subscribe(()=>{});
      }
    }
    
    window.location.reload();
  }

  deleteMeal(meal: Meal){
    const mealId = meal["_id"]; // retreive the unique id for the note

    this.mealService.deleteMeal(mealId).subscribe(() => {});

    window.location.reload();
  }

  editMeal(meal: Meal){
    const mealId = meal["_id"]; // retreive the unique id for the note

    const data = {
      _id: meal._id,
      title: meal.title,
      text: this.mealForm.value.description,
      vouch: meal.vouch,
      imageUrl: meal.imageUrl,
      vouchedBy: meal.vouchedBy
    }

    this.mealService.updateMeal(mealId, data).subscribe(() => {});
    
    window.location.reload();
  }
}
