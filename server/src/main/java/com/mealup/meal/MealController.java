package com.mealup.meal;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST controller for managing Meal entities.
 */
@RestController
@RequestMapping("/api/meals")
public class MealController {

    /** The repository used to manage Meal entities. */
    private final MealRepository mealRepository;

    /**
     * Constructs a new MealController with the given MealRepository.
     *
     * @param mealRepository the repository used to manage Meal entities
     */
    public MealController(MealRepository mealRepository) {
        this.mealRepository = mealRepository;
    }

    /**
     * Creates a new Meal entity based on the given request.
     *
     * @param request the request containing the meal details
     * @return the created Meal entity
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Meal createMeal(@RequestBody MealCreateDto request) {
        Meal meal = new Meal(request.name(), request.type(), request.ingredients(), request.recipe(),
                request.preparation(), request.cooking());
        return mealRepository.save(meal);
    }

    /**
     * Retrieves all Meal entities.
     *
     * @return a list of all Meal entities
     */
    @GetMapping
    public List<Meal> getMeals() {
        return mealRepository.findAll();
    }
}