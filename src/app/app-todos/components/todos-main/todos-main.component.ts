import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filters.enum';

@Component({
  selector: 'app-todos-main',
  templateUrl: './todos-main.component.html',
  styleUrls: ['./todos-main.component.scss']
})
export class TodosMainComponent {
  todosService = inject(TodosService);

  visibleTodos = computed( () => {
    const todos = this.todosService.todosSig();
    const filter = this.todosService.filterSig();

    if(filter === FilterEnum.active){
      return todos.filter(todo => !todo.isCompleted );
    } else if( filter === FilterEnum.completed){
      return todos.filter(todo => todo.isCompleted);
    }else{
      return todos;
    }
  })
}
