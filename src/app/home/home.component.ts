import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  groupMenu = [
    {
      "id": "1",
      "nama_menu": "Today",
      "is_active": false,
      "menu_init": "today"
    },
    {
      "id": "1",
      "nama_menu": "Inbox",
      "is_active": false,
      "menu_init": "inbox"
    },
  ]
  constructor() {

  }

  ngOnInit(): void {
  }

}
