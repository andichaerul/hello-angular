import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  pesanDanKesan = "Pesan Dan Mantap cuy";
  constructor() {
  }

  ngOnInit(): void {
  }

  makan(): void {
    if (this.pesanDanKesan == "Pesan Dan Mantap cuy") {
      this.pesanDanKesan = "Hahahah";
    } else {
      this.pesanDanKesan = "Pesan Dan Mantap cuy";
    }
  }

}
