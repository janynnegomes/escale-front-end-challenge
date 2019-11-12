import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';



@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[TodoListComponent]
})
export class TodoListModule { }
