package com.mealup.meal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Entity class representing a Meal.
 */
@Entity
@Table(name = "meals")
public class Meal {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String type;

    @Column
    private String ingredients;

    @Column
    private String recipe;

    @Column
    private int preparation;

    @Column
    private int cooking;

    /**
     * Protected no-argument constructor for JPA.
     */
    protected Meal() {
    }

    /**
     * Constructs a new Meal entity with the given details.
     *
     * @param name        the name of the meal
     * @param type        the type of the meal
     * @param ingredients the ingredients of the meal
     * @param recipe      the recipe of the meal
     * @param preparation the preparation time of the meal
     * @param cooking     the cooking time of the meal
     */
    public Meal(String name, String type, String ingredients, String recipe, int preparation, int cooking) {
        this.name = name;
        this.type = type;
        this.ingredients = ingredients;
        this.recipe = recipe;
        this.preparation = preparation;
        this.cooking = cooking;
    }

    /**
     * Returns the ID of the meal.
     *
     * @return the ID of the meal
     */
    public Long getId() {
        return id;
    }

    /**
     * Returns the name of the meal.
     *
     * @return the name of the meal
     */
    public String getName() {
        return name;
    }

    /**
     * Returns the type of the meal.
     *
     * @return the type of the meal
     */
    public String getType() {
        return type;
    }

    /**
     * Returns the ingredients of the meal.
     *
     * @return the ingredients of the meal
     */
    public String getIngredients() {
        return ingredients;
    }

    /**
     * Sets the ID of the meal.
     *
     * @param id the ID of the meal
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Sets the name of the meal.
     *
     * @param name the name of the meal
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Sets the type of the meal.
     *
     * @param type the type of the meal
     */
    public void setType(String type) {
        this.type = type;
    }

    /**
     * Sets the ingredients of the meal.
     *
     * @param ingredients the ingredients of the meal
     */
    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    /**
     * Returns the recipe of the meal.
     *
     * @return the recipe of the meal
     */
    public String getRecipe() {
        return recipe;
    }

    /**
     * Sets the recipe of the meal.
     *
     * @param recipe the recipe of the meal
     */
    public void setRecipe(String recipe) {
        this.recipe = recipe;
    }

    /**
     * Returns the preparation time of the meal.
     *
     * @return the preparation time of the meal
     */
    public int getPreparation() {
        return preparation;
    }

    /**
     * Sets the preparation time of the meal.
     *
     * @param preparation the preparation time of the meal
     */
    public void setPreparation(int preparation) {
        this.preparation = preparation;
    }

    /**
     * Returns the cooking time of the meal.
     *
     * @return the cooking time of the meal
     */
    public int getCooking() {
        return cooking;
    }

    /**
     * Sets the cooking time of the meal.
     *
     * @param cooking the cooking time of the meal
     */
    public void setCooking(int cooking) {
        this.cooking = cooking;
    }
}