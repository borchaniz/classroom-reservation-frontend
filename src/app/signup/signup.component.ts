import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';

declare var swal: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();

  constructor(private userService:UserService) {
  }

  ngOnInit() {
  }

  signup() {
    if (!this.user.isValid()) return;
    if (this.user.password !== this.user.cPassword)
      swal('warning', 'Vérifiez que les deux mots de passes sont les même!', 'error');
    this.userService.register(this.user).subscribe(data=>{
      console.log(data);
    })

  }

}
