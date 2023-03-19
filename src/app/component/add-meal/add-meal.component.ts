import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meal } from 'src/app/models/meal.model';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent {
  @Output() onAddUpdateMeal: EventEmitter<Meal> = new EventEmitter();
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      meal: [''],
      description: [''],
      imageUrl: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.onAddUpdateMeal.emit(this.myForm.value);
    console.log(this.myForm.value);
  }
}
