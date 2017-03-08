import { TodosService } from '../todos.service';
import { Todo } from '../todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'td-app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos: Todo[];


  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todos = this.todosService.getUncompletedTodos();
  }

}
