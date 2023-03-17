import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './component/meal/meal.component';
import { MealListComponent } from './meal-list/meal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
