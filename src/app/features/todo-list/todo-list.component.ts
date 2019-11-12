import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, empty } from 'rxjs';
import { TodoListModule } from './todo-list.module';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks : any;

  constructor() {
    this.tasks = [];
   }

  ngOnInit() {
        
  }

  onSubmitNewtask = (form: NgForm)=>{    

      console.log(form.value);

      if(form.value.task.trim().length > 0)  
      {
        // Adds new task to list
        this.tasks.push(form.value.task.trim());
        
        // Clear input
        form.reset();
      }
     }

  onClick = (event)=>{
    console.log(event.target.value);
  }

  }


