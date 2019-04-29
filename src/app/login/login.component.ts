import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';
import {Consts} from '../shared/Consts';
import {Router} from '@angular/router';

declare var swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user).subscribe(resp => {
      // display its headers
      localStorage.setItem(Consts.TOKEN_STORAGE, resp.headers.get('Authorization'));
      this.userService.getAuthUser().subscribe(data => {
        if (data.status!=1){
          swal('Erreur', 'Votre compte n\'est pas encore validé!', 'error');
          localStorage.clear();
        }else{
          localStorage.setItem(Consts.USER_STORAGE, JSON.stringify(data));
          this.router.navigateByUrl('/');
        }
        },error => {
        swal('Error', 'Please make sure you have entered the right credentials!', 'error');
        localStorage.clear();
      });
    }, error => {
      swal('Error', 'Please make sure you have entered the right credentials!', 'error');
      localStorage.clear();
    });
  }

}
