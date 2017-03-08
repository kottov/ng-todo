import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'td-app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  todo: Todo;
  todoId: number;
  isNew = true;
  todoForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private todosService: TodosService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isNew = false;
        this.todoId = params['id'];
        this.todo = this.todosService.getTodo(this.todoId);
      } else {
        this.isNew = true;
        this.todo = null;
      }
      this.initForm();
    });
  }

  onSubmit() {
    const editedTodo = this.todoForm.value;
    if (this.isNew) {
      this.todosService.addTodo(editedTodo);
    } else {
      this.todosService.editTodo(this.todo, editedTodo);
    }
    this.navigateBack();
  }

  navigateBack() {
    this.router.navigate(['../']);
  }

  onCancel() {
    this.navigateBack();
  }

  initForm() {
    let todoName = '';
    let todoDescription = '';

    if (!this.isNew) {
      todoName = this.todo.name;
      todoDescription = this.todo.description;
    }

    this.todoForm = this.formBuilder.group({
      name: [todoName, Validators.required],
      description: [todoDescription, Validators.required]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
