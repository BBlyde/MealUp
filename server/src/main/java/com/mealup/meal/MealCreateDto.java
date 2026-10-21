package com.mealup.meal;
/**
 * Data Transfer Object for creating a new Meal entity.
 *
 * @param name        the name of the meal
 * @param type        the type of the meal
 * @param ingredients the ingredients of the meal
 * @param recipe      the recipe of the meal
 * @param preparation the preparation time of the meal
 * @param cooking     the cooking time of the meal
 */
public record MealCreateDto(String name, String type, String ingredients, String recipe, int preparation, int cooking) {

}
