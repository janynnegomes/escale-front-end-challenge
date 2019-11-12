import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './features/todo-list/todo-list.component';
import { TodoListModule } from './features/todo-list/todo-list.module';


const routes: Routes = [
  {
    path:'',
    redirectTo:'todo-list',
    pathMatch:'full'
  },
  {
      path:'todo-list',
      component: TodoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TodoListModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
