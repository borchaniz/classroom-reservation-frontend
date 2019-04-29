import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';
import {User} from '../models/user';
import {Consts} from '../Consts';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService {

  constructor(private http: HttpClient) {
    super();
  }


  public register(user: User): Observable<User> {
    return <Observable<User>> this.http.post(this.url + 'user/register/', user);
  }

  public login(user: User): Observable<HttpResponse<Object>> {
    return <Observable<HttpResponse<Object>>> this.http.post(this.url + 'user/signin', user, {observe: 'response'});
  }

  getAuthUser(): Observable<User> {
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<User>> this.http.get(this.url + 'user/authenticated', {headers: headers});
  }
}
