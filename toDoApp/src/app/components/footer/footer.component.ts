import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  tasks: Task[] = [];
  counter: number = 0;
  anyComplete: boolean = false;
  filter: string = '';

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe((response) => {
      this.tasks = response;
      this.counter = this.tasks.filter(
        (task) => task.completed === false
      ).length;
      this.anyComplete = this.tasks.some((task) => task.completed === true);
    });
    this.route.paramMap.subscribe((param) => {
      this.filter = param.get('filter') || '';
    });
  }

  clearCompleted(): void {
    const completedTasks: Task[] = this.tasks.filter(
      (task) => task.completed == true
    );
    completedTasks.forEach((task) => this.taskService.deleteTask(task.id));
  }
}
