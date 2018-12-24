import {Component, OnInit} from '@angular/core';
import {AuthorService} from '../shared/services/author.service';
import {Author} from '../shared/models/author';

declare var jQuery: any;
declare var swal: any;

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];
  author: Author = new Author();

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.authorService.getAllAuthors().subscribe(data => {
      this.authors = data;
      setTimeout(function () {
        jQuery('#example').DataTable();
      });
    });
  }

  addAuthor() {
    this.authorService.addAuthor(this.author).subscribe(data => {
      this.author = new Author();
      this.authors = data;
      jQuery('#example').DataTable().destroy();
      jQuery('#example').DataTable();
      swal('Success!', 'The new author has been saved!', 'success');
    }, error1 => {
      swal('Error!', 'An Error has occured please try again!', 'success');
    });
  }

}
