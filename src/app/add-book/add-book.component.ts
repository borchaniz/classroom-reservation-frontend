import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/models/book';
import {Genre} from '../shared/models/genre';
import {BookService} from '../shared/services/book.service';
import {AuthorService} from '../shared/services/author.service';
import {Author} from '../shared/models/author';
import {Router} from '@angular/router';
import {FileService} from '../shared/services/file.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

declare var swal: any;

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = {percentage: 0};

  book: Book = new Book();
  genres: Genre[] = [];
  authors: Author[] = [];

  constructor(private bookService: BookService,
              private authorService: AuthorService,
              private router: Router,
              private fileService: FileService) {
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

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.fileService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.book.image = event.body.toString();
        console.log(this.book.image);
      }
    });

    this.selectedFiles = undefined;
  }

  saveBook() {
    this.bookService.addBook(this.book).subscribe(data => {
      swal('Succes!', 'The book was added successfully', 'success').then(res => {
        this.router.navigateByUrl('/books');
      });
    });
  }
}
