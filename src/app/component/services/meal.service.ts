import { Injectable } from '@angular/core';
import { Meal } from 'src/app/models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  meals: Meal[] = [
    {   
        id: 1,
        title : 'Meal 1',
        description : 'yes',
        imageUrl : 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg',
        createdDate : new Date(),
        vouch: 0
    }
  ]

  getAllMeals(): Meal[] {
    return this.meals;
  }

  getMealById(mealId: number): Meal{
    const meal = this.meals.find(meal => meal.id === mealId);
    if (!meal) {
      throw new Error("Meal not found");
    } else {
      return meal;
    }
  }

  vouchMealById(mealId: number, mealType: 'vouch' | 'unvouch'): void {
    const meal = this.getMealById(mealId);
    mealType === 'vouch' ? meal.vouch++ : meal.vouch--;
  }
}