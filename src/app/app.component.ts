import { Component, OnInit } from '@angular/core';
import { Meal } from './models/meal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  meals!: Meal[];
  
  ngOnInit(){
    this.meals = [
      {   
        title : 'Meal 1',
        description : 'yes',
        imageUrl : 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg',
        createdDate : new Date(),
        vouch: 0
      }
    ]
  }
}
