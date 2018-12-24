import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericService} from './generic.service';
import {Observable} from 'rxjs/Observable';
import {Author} from '../models/author';


@Injectable({
  providedIn: 'root'
})
export class AuthorService extends GenericService {

  constructor(private http: HttpClient) {
    super();
    this.url += 'author/';
  }

  public getAllAuthors(): Observable<Array<Author>> {
    return <Observable<Array<Author>>> this.http.get(this.url);
  }

  public addAuthor(author: Author): Observable<Author[]> {
    return <Observable<Author[]>> this.http.post(this.url, author);
  }

}
