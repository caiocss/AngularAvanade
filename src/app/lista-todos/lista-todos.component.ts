import { Todo } from './../../typings/Todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {
 todos: Todo[] = [];
  constructor(private todoService: TodoService ) { }

  ngOnInit() {
    this.todoService.getTodos()
    .subscribe(value => {
      console.log(value);
      this.todos = value;
    });
  }

}
