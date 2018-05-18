import { Component, OnInit } from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  {
  title = "Hello World!!!!";
  tasks = [];
  task:Task = {
    nome :"",
    valor:0
  };
  add() {
    let task = Object.assign({},this.task)
    this.tasks.push(task);
  }
    

}
