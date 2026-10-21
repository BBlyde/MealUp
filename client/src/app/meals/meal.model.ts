export interface MealCreateRequest {
    name: string;
    type: string;
    ingredients: string;
    recipe: string;
    preparation: number;
    cooking: number;
}

export interface Meal extends MealCreateRequest {
    id: number;
}