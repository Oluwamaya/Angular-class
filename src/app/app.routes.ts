import { Routes } from '@angular/router';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    
       {path: "", pathMatch : "full", redirectTo: "home"},
       {path:"home", component: HomeComponent},
       {path:"show_todo" ,component:ShowTodoComponent}
    
];
