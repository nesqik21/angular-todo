import { Injectable,signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filters.enum';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todosSig = signal<TodoInterface[]>([]);
  filterSig = signal<FilterEnum>(FilterEnum.all);

  constructor() { }

  changeFilter(filterName:FilterEnum):void{
    this.filterSig.set(filterName);
  }

  addTodo(text:string):void{
    const newTodo:TodoInterface = {
      text,
      isCompleted:false,
      id:Math.random().toString(16)
    }
    this.todosSig.update((todos) => [...todos,newTodo]);
  }

  changeTodo(id:string, text:string):void{
    this.todosSig.update(
      todos => todos.map(todo => todo.id === id ? {...todo,text} : todo) )
  }
}
