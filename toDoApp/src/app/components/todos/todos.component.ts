import { Task } from 'src/app/models/task.model';
import { TaskService } from '../../service/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe((allTasks) => {
      this.tasks = allTasks;
      this.route.paramMap.subscribe((param) => {
        const filter = param.get('filter') || '';
        this.filterTask(filter);
      });
    });
  }

  filterTask(filter: string): void {
    if (filter === 'completed') {
      this.filteredTasks = this.tasks.filter((task) => task.completed == true);
    } else if (filter === 'pending') {
      this.filteredTasks = this.tasks.filter((task) => task.completed == false);
    } else {
      this.filteredTasks = this.tasks;
    }
  }
}
