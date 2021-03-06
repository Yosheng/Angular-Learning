import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../domain/entities';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private _todos: Todo[];

  public get todos(): Todo[] {
    return this._todos;
  }

  @Input()
  public set todos(todos: Todo[]) {
    this._todos = todos;
  }

  @Output() onRemoveTodo = new EventEmitter<Todo>();
  @Output() onToggleTodo = new EventEmitter<Todo>();
  @Output() onToggleAll = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onToggleTriggered(todo: Todo) {
    this.onToggleTodo.emit(todo);
  }

  onRemoveTriggered(todo: Todo){
    this.onRemoveTodo.emit(todo);
  }

  onToggleAllTriggered() {
    this.onToggleAll.emit(true);
  }
}
