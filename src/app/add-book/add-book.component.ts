import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/models/book';
import {Genre} from '../shared/models/genre';
import {BookService} from '../shared/services/book.service';
import {AuthorService} from '../shared/services/author.service';
import {Author} from '../shared/models/author';
import {Router} from '@angular/router';

declare var swal: any;

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = new Book();
  genres: Genre[] = [];
  authors: Author[] = [];

  constructor(private bookService: BookService, private authorService: AuthorService, private router:Router) {
  }

  ngOnInit() {
    this.bookService.getAllGenres().subscribe(data => {
      this.genres = data;
      this.book.genre = this.genres[0];
    });

    this.authorService.getAllAuthors().subscribe(data => {
      this.authors = data;
      this.book.author = this.authors[0];
    });
  }

  saveBook() {
    this.bookService.addBook(this.book).subscribe(data => {
      swal('Succes!', 'The book was added successfully', 'success').then(res=>{
        this.router.navigateByUrl('/books');
      });
    });
  }
}
