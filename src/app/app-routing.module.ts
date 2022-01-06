import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './_about/about.component';
import { ContactComponent } from './_contact/contact.component';
import { TodoListComponent } from './_todo-list/todo-list.component';

// Real
import { TodolistComponent } from './todolist/todolist.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'todo/:name',
        component: TodolistComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
