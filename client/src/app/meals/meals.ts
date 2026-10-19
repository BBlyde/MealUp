import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

interface Meal {
  name: string;
  ingredients: string;
  recipe: string;
  type: string;
  preparation: string;
  cooking: string;
}

@Component({
  selector: 'app-meals',
  imports: [FormField],
  templateUrl: './meals.html',
  styleUrl: './meals.css',
})
export class Meals {
  readonly mealModel = signal({ name: '', ingredients: '', recipe: '', type: '', preparation: '', cooking: '' });
  readonly mealForm = form(this.mealModel);
  readonly meals = signal<Meal[]>([]);

  /**
   * Adds a meal to the list of meals.
   * 
   * @param event The form submission event.
   */
  addMeal(event: Event) {
    event.preventDefault();
    const meal = this.mealModel();
    if (meal.name && meal.type) {
      this.meals.update(meals => [...meals, meal]);
      this.mealModel.set({ name: '', ingredients: '', recipe: '', type: '', preparation: '', cooking: '' });
    }
  }
}
