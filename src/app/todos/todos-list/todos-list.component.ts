import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'td-app-todos-list',
  templateUrl: './todos-list.component.html'
})
export class TodosListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  todos: Todo[];
  filterInputElem: HTMLInputElement;

  constructor(private todosService: TodosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.todos = this.todosService.getTodos();
    this.subscription = this.todosService.updated.subscribe(() => {
      this.todos = this.todosService.getTodos();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clearFilter() {
    this.filterInputElem.value = null;
  }
}
