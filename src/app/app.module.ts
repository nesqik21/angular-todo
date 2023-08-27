import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTodosComponent } from './app-todos/app-todos.component';
import { AppHeaderComponent } from './app-todos/components/app-header/app-header.component';
import { TodosFooterComponent } from './app-todos/components/todos-footer/todos-footer.component';
import { TodosMainComponent } from './app-todos/components/todos-main/todos-main.component';
import { TodoComponent } from './app-todos/components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTodosComponent,
    AppHeaderComponent,
    TodosFooterComponent,
    TodosMainComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
