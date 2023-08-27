import { Component, inject, computed } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filters.enum';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.scss']
})
export class TodosFooterComponent {
  todosService = inject(TodosService);

  filterSig = this.todosService.filterSig;
  filterEnum = FilterEnum;
  activeCount = computed( () => {
    return this.todosService.todosSig().filter(todo => !todo.isCompleted).length
  })
  noTodosClass = computed(()=>
    this.todosService.todosSig().length === 0
  )
  itemsLeftText = computed(()=>
    `item${this.activeCount() !== 1 ? 's' : ''} left`
  )

  changeFilter(event:Event, typeOfEvent:FilterEnum):void{
    event.preventDefault();
    this.todosService.changeFilter(typeOfEvent);
  }
}
