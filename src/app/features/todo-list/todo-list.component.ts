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
  remaining: number; 

  constructor() {
    this.tasks = [];
    this.remaining=0;
   }

  ngOnInit() {
        
  }

  onSubmitNewtask = (form: NgForm)=>{    

      console.log(form.value);

      if(form.value.task.trim().length > 0)  
      {
        // Adds new task to list
        this.tasks.push({text: form.value.task.trim(), marked:false});
        
        // Clear input
        form.reset();

        this.calculateRemaining();
      }
     }

  onClick = (event, task)=>{
    
    task.marked = !task.marked;

    this.calculateRemaining();
    console.log(event.target.value);
  }

  calculateRemaining = ()=>{
    this.remaining = this.tasks.filter(t=> {return t.marked === false }).length;
  }
  }


