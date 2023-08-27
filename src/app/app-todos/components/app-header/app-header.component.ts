import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-toodos-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  todosService = inject(TodosService)
  text:string = '';

  changeText(event:Event):void{
    const target = event.target as HTMLInputElement
    this.text = target.value;
  }

  addTodo():void{
    this.todosService.addTodo(this.text);
    this.text = '';
  }
}
