import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor() {
  }

  ngOnInit() {
  }

}