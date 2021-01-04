import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './components/blank/blank.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'sign-up', component: SignupComponent},
  { path: 'log-in',component:LoginComponent},
  { path: 'home', component: BlankComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', redirectTo: 'sign-up'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
