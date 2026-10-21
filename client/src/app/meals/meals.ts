import { Component, signal, inject, OnInit } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Meal } from './meal.model';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-meals',
    imports: [FormField, CommonModule],
    templateUrl: './meals.html',
    styleUrl: './meals.css',
})
export class Meals implements OnInit {
    /** The API service used to interact with the backend. */
    private readonly apiService = inject(ApiService);

    /** Indicates whether the list of meals is currently being loaded. */
    readonly isLoading = signal(false);

    /** Indicates whether a meal is currently being saved. */
    readonly isSaving = signal(false);

    /** Stores any error that occurs while loading the list of meals. */
    readonly loadError = signal<string | null>(null);

    /** Stores any error that occurs while saving a meal. */
    readonly saveError = signal<string | null>(null);

    /** The model representing the current meal being added. */
    readonly mealModel = signal({ name: '', ingredients: '', recipe: '', type: '', preparation: 0, cooking: 0 });

    /** The form group for the meal form. */
    readonly mealForm = form(this.mealModel);

    /** The list of meals retrieved from the API. */
    readonly meals = signal<Meal[]>([]);

    /**
     * Initializes the component by fetching the list of meals from the API.
     */
    ngOnInit(): void {
        this.isLoading.set(true);

        // Fetch the list of meals from the API.
        this.apiService.getMeals().subscribe({
            next: meals => {
                this.meals.set(meals);
                this.isLoading.set(false);
            },
            error: () => {
                this.loadError.set('Impossible de charger les repas.');
                this.isLoading.set(false);
            },
        });
    }

    /**
     * Adds a meal to the list of meals.
     * 
     * @param event The form submission event.
     */
    addMeal(event: Event): void {
        event.preventDefault();
        const meal = this.mealModel();

        // Check the required fields before attempting to save the meal.
        if (meal.name && meal.type && !this.isSaving()) {
            this.isSaving.set(true);
            this.saveError.set(null);

            // Attempt to save the meal using the API service.
            this.apiService.createMeal(meal).subscribe({
                next: savedMeal => {
                    // Add the newly saved meal to the list of meals.
                    this.meals.update(meals => [...meals, savedMeal]);
                    // Reset the meal form after successfully saving the meal.
                    this.mealModel.set({
                        name: '',
                        ingredients: '',
                        recipe: '',
                        type: '',
                        preparation: 0,
                        cooking: 0,
                    });
                    this.isSaving.set(false);
                },
                error: () => {
                    this.saveError.set('Impossible d’enregistrer le repas.');
                    this.isSaving.set(false);
                },
            });
        }

    }
}
