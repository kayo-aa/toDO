import { TaskService } from 'src/app/service/task.service';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/models/task.model';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input()
  task: Task = {
    id: '',
    title: '',
    completed: false,
  };

  @Input() isCompleted: boolean = false;

  showEdition: boolean = false;

  constructor(private taskService: TaskService) {}

  toggleEdition(editInput?: HTMLInputElement) {
    this.showEdition = !this.showEdition;
    if (editInput) {//receives the input to apply a focus
      setTimeout(() => {
        editInput.focus();
      }, 0);
    }
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
    this.task.completed = !this.task.completed;
    this.taskService.updateTasks();
  }

  editTask(event: Event) {
    const newTitle = (event.target as HTMLInputElement).value.trim();
    if (newTitle != '') {
      this.taskService.editTask(newTitle, this.task.id);
      this.toggleEdition();
    } else {
      alert('No puedes mandar una tarea vacía');
    }
  }

  deleteTask() {
    this.taskService.deleteTask(this.task.id);
  }
};
