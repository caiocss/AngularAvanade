import { Todo } from './../../../typings/Todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {
 todos: Todo[] = [];
 todos$: Observable<Todo[]>;
  constructor(private todoService: TodoService, private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.todos$ = this.todoService.getTodos(user.id);
    });
  }

  onDeleteItem(id) {
    console.log(id);
    this.todoService.removeTodo(id).subscribe(() => {
      alert('To-do apagado com sucesso');
      this.router.navigateByUrl('/todos');
      // this.ngOnInit();
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }
}
