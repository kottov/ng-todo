import { RouterModule, Routes } from '@angular/router';

import { TODOS_ROUTES } from './todos/todos.routes';
import { TodosComponent } from './todos/todos.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/todos', pathMatch: 'full' },
    { path: 'todos', component: TodosComponent, children: TODOS_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
