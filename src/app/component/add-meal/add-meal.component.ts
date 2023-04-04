import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meal } from 'src/app/models/meal.model';
import { Router } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent {
  @Output() onAddUpdateMeal: EventEmitter<Meal> = new EventEmitter();
  mealForm: FormGroup;

  constructor(private formBuilder: FormBuilder,  private mealService: MealService, private router: Router) {
    this.mealForm = this.formBuilder.group({
      meal: [''],
      description: [''],
      imageUrl: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.onAddUpdateMeal.emit(this.mealForm.value);
    console.log(this.mealForm.value);

    this.mealService.addMeal(this.mealForm.value)
      .subscribe((value) => {
        //this.router.navigateByUrl("/meals");
      });
  }
}
