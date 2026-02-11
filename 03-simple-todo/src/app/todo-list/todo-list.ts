import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  tasks: string[] = [];
  newTask: string = '';
  isWarning: boolean = false;

  addTask() {
    if (this.newTask.length !== 0) {
      this.tasks.push(this.newTask);
      this.newTask = '';
      this.isWarning = false;
    } else {
      this.isWarning = true;
    }

  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
