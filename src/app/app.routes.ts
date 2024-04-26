import { Routes } from '@angular/router';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { authGuard } from './guards/auth.guard';
import { FetchComponent } from './fetch/fetch.component';
import { OneFetchComponent } from './one-fetch/one-fetch.component';

export const routes: Routes = [
    
       {path: "", pathMatch : "full", redirectTo: "home"},
       {path:"home", component: HomeComponent, canActivate: [authGuard]},
       {path:"show_todo" ,component:ShowTodoComponent},
       {path: "navbar", component: NavbarComponent},
       {path: "about", component:AboutComponent},
       {path: "login", component: LoginComponent},
       {path: "dashboard", component: DashboardComponent, canActivate: [authGuard]},
       {path: "fetch", component: FetchComponent,  canActivate: [authGuard]},
       {path: "onefetch/:id", component: OneFetchComponent}
    
];
