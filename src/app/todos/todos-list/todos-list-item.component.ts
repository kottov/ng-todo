import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'td-app-todos-list-item',
  templateUrl: './todos-list-item.component.html'
})
export class TodosListItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() todoId: number;
  @Input() filter: string;
  @Output() onClicked = new EventEmitter();

  constructor() { }

  onClick() {
    this.onClicked.emit();
  }

  ngOnInit() {
  }

}
