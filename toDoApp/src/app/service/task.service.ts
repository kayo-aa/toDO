import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { v4 as uuidv4 } from "uuid";
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = this.storageService.getTasks();
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  constructor(private storageService: StorageService) {}
  
  updateTasks() {
    this.tasksSubject.next(this.tasks);
    this.storageService.saveTasks(this.tasks);
  }
  
  createTask(inputValue: string) {
    const task: Task = {
      id: uuidv4(),
      title: inputValue,
      completed: false,
    };
    this.tasks.push(task);
    this.updateTasks();
  }

  editTask(newTitle: string, id: string) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    this.tasks[taskIndex].id = id;
    this.tasks[taskIndex].title = newTitle;
    this.updateTasks();
  }

  
  deleteTask(id: string) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(taskIndex, 1);
    this.updateTasks()
  }
}
