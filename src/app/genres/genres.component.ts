import {Component, OnInit} from '@angular/core';
import {BookService} from '../shared/services/book.service';
import {Genre} from '../shared/models/genre';
import {Author} from '../shared/models/author';

declare var jQuery:any;
declare var swal:any;

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: Genre[] =  [];
  genre: Genre = new Genre();

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getAllGenres().subscribe(data => {
      this.genres = data;
      setTimeout(function () {
        jQuery('#example').DataTable();
      });
    });
  }

  addGenre() {
    this.bookService.addGenre(this.genre).subscribe(data => {
      this.genre = new Genre();
      this.genres = data;
      jQuery('#example').DataTable().destroy();
      jQuery('#example').DataTable();
      swal('Success!', 'The new genre has been saved!', 'success');
    }, error1 => {
      swal('Error!', 'An Error has occured please try again!', 'success');
    });
  }

}
