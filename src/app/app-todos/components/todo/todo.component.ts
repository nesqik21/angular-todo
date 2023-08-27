import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input({required:true}) todo!:TodoInterface;
  @Input({required:true}) isEditing!:boolean;
  @Output() setEditingID: EventEmitter<string | null> = new EventEmitter();

  editingText:string = '';
  todosService = inject(TodosService)

  ngOnInit(): void {
    this.editingText = this.todo.text;
  }

  changeText(event:Event):void{
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }

  changeTodo():void{
    this.todosService.changeTodo(this.todo.id,this.editingText);
    this.setEditingID.emit(null);
  }

  setTodoInEditMode():void{
    this.setEditingID.emit(this.todo.id);
  }

  removeTodo():void{

  }

  toggleTodo():void{

  }
}
