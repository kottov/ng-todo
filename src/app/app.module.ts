import { TodosService } from './todos/todos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';
import { TodosComponent } from './todos/todos.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { TodosListItemComponent } from './todos/todos-list/todos-list-item.component';
import { TodoDetailComponent } from './todos/todo-detail/todo-detail.component';
import { TodosStartComponent } from './todos/todos-start.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { TodosListFilterPipe } from './todos/todos-list/todos-list-filter.pipe';
import { TodosListHighlightPipe } from './todos/todos-list/todos-list-highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    TodosComponent,
    TodosListComponent,
    TodosListItemComponent,
    TodosListItemComponent,
    TodoDetailComponent,
    TodosStartComponent,
    TodoEditComponent,
    TodosListFilterPipe,
    TodosListHighlightPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
