import {Component, OnInit} from '@angular/core';
import {BookService} from '../shared/services/book.service';
import {Book} from '../shared/models/book';

declare var jQuery:any;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
      setTimeout(function () {
        jQuery('#example').DataTable();
      });
    });
  }

}
