import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'td-app-todos-start',
  template: `
    <p>
      Please select or create the TODO!
    </p>
  `,
  styles: []
})
export class TodosStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
