import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks';

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS)
    return tasks;
  }
}
