import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['task.component.css']
})

export class TaskComponent{
  constructor(public taskService: TaskService){
    this.getTaskList();
  }

  getTaskList(){
    this.taskService.getTaskList()
      .subscribe(
        res => console.log(res)
      )
  }
}
