import { Component } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private taskService: TaskService) {}

  addTask(event: Event){
    const input = event.target as HTMLInputElement;
    const title = input.value.trim()
    if (title != '') {
      this.taskService.createTask(title);
      input.value = '';
    } else {
      alert('No puedes mandar una tarea vacía')
    }
  }
}
