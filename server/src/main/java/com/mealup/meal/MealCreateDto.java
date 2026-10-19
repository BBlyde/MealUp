package com.mealup.meal;

import java.time.LocalDateTime;

public record MealCreateDto(String name, LocalDateTime eatenAt) {
    
}
