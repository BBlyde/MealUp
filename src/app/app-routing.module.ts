import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MealListComponent } from './component/meal-list/meal-list.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { Meal } from './models/meal.model';

const routes: Routes = [
  { path : 'meals', component: MealListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: MealListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
