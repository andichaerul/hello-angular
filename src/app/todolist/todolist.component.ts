import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public todolist: [] = [];
  public namaMenu: string = "";


  constructor(
    private fb: FormBuilder,
    private http: HttpClient) {
  }

  todoListForm = this.fb.group({
    todoName: [''],
    todoDate: [''],
  })

  ngOnChanges() {
    // console.log(this.nama);
  }
  ngOnInit(): void {
    this.http.get<[]>("http://localhost:8888/BelajarAngular/api/get_data.php").subscribe(
      s => {
        this.todolist = s
      },
      error => {
        console.log(error);
      });
  }

  onSubmit() {
    let todoName = this.todoListForm.controls["todoName"].value;
    let todoDate = this.todoListForm.controls["todoDate"].value;
    console.log(todoName, todoDate);
    // http://localhost:8888/BelajarAngular/api/simpan.php?nama_todo=Belajar&date=2020-01-01
    this.http.get<[]>("http://localhost:8888/BelajarAngular/api/simpan.php?nama_todo=" + todoName + "&date=" + todoDate + "").subscribe(
      response => {
        console.log(response);
        this.http.get<[]>("http://localhost:8888/BelajarAngular/api/get_data.php").subscribe((response) =>
          this.todolist = response
        );
      },
      error => {
        console.log(error);
      }
    );



    // pipe(map((res) => console.log(res))
  }

  ngDoCheck() {
    // console.log(window.location.pathname);
    let url = window.location.pathname;
    let arrPath = url.split("/");
    this.namaMenu = arrPath[3];
  }

}
