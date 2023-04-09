import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MealListComponent } from './component/meal-list/meal-list.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { Meal } from './models/meal.model';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path : 'meals', component: MealListComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'reset-password', component: ResetPasswordComponent, canActivate: [AuthGuard]},
  { path: '**', component: MealListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
