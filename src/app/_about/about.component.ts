import { Component, OnInit } from '@angular/core';
import { User } from '../User';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  //Property for the gender
  private gender: string[] = [];
  //Property for the user
  private user: User | undefined;

  constructor() { }

  ngOnInit(): void {
    this.gender = ['Male', 'Female', 'Others'];
    //Create a new user object
    this.user = new User({
      email: "", password: { pwd: "", confirm_pwd: "" },
      gender: this.gender[0], terms: false
    });
  }
}


