import { Todo } from './../../../typings/Todo';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() data: Todo;
  @Output() deleteEvent = new EventEmitter<number>();
  constructor(private router: Router) { }

  ngOnInit() {

  }

  editar() {
    this.router.navigateByUrl('/todos/' + this.data.id);
  }

  apagar() {
    this.deleteEvent.emit(this.data.id);
  }

}