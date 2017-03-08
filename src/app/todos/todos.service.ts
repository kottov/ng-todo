import { Todo } from './todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    new Todo('Todo 1', 'Buy milk'),
    new Todo('Todo 2', 'Walk the dog'),
    new Todo('Todo 3', 'Call father'),
    new Todo('Todo 4', 'Choose tickets'),
    new Todo('Todo 5', 'Develop TODO app')
  ];
  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  getUncompletedTodos(): Todo[] {
    return this.todos.filter((todo) => !todo.isDone);
  }

  getTodo(id: number): Todo {
    return this.todos[id];
  }

  completeTodo(id) {
    this.todos[id].isDone = true;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  editTodo(oldTodo: Todo, newTodo: Todo) {
    this.todos[this.todos.indexOf(oldTodo)] = newTodo;
  }
}
