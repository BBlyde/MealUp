import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal.model';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit{

  @Input() meal!: Meal;

  buttonText!: string;

  ngOnInit(){
    this.buttonText = "➕";
  }

  onAddVouch() {
    if (this.buttonText === '➕') {
      this.meal.vouch++;
      this.buttonText = '✖️';
    } else {
      this.meal.vouch--;
      this.buttonText = '➕'
    }
  }
}
