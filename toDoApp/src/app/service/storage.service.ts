import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveTasks(tasks: Task[]): void{
    localStorage.setItem('mydayapp-angular', JSON.stringify(tasks));
  }
  getTasks(): Task[]{
    const tasksString: string | null = localStorage.getItem('mydayapp-angular');
    return tasksString ? JSON.parse(tasksString) : []
  }
}
