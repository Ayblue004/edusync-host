import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent },
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent}
];
