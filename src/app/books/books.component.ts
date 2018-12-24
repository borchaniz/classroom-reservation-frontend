import {Component, OnInit} from '@angular/core';
import {BookService} from '../shared/services/book.service';
import {Book} from '../shared/models/book';
import {Discount} from '../shared/models/discount';

declare var jQuery: any;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  selectedBook: Book = null;
  discount: Discount = new Discount();

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

  saveDiscount() {
    this.bookService.saveDiscount(this.discount, this.selectedBook.id).subscribe(data=>{
      this.selectedBook = null;
    });
  }
}
