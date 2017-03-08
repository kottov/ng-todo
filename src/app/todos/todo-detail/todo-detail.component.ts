import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TodosService } from './../todos.service';

@Component({
  selector: 'td-app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  selectedTodo: Todo;
  selectedTodoId: number;

  constructor(private todosService: TodosService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.selectedTodoId = params['id'];
      this.selectedTodo = this.todosService.getTodo(this.selectedTodoId);
    });
  }

  onComplete() {
    this.todosService.completeTodo(this.selectedTodoId);
    this.router.navigate(['../']);
  }

  onEdit() {
    this.router.navigate(['/todos', this.selectedTodoId, 'edit']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
