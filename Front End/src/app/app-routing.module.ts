import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';

import { GetAnswerComponent } from './get-answer/get-answer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'all-questions', component: AllQuestionsComponent },
  { path: '', component: HomeComponent },

  { path: 'get-answer', component: GetAnswerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
