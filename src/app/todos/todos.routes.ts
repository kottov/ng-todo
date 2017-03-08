import { Routes } from '@angular/router';

import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodosStartComponent } from './todos-start.component';

export const TODOS_ROUTES: Routes = [
    { path: '', component: TodosStartComponent },
    { path: 'new', component: TodoEditComponent },
    { path: ':id', component: TodoDetailComponent },
    { path: ':id/edit', component: TodoEditComponent }
];
