import {Component, OnInit} from '@angular/core';
import {AuthorService} from '../shared/services/author.service';
import {Author} from '../shared/models/author';

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
    authors: Author[] = [];

    constructor(private authorService: AuthorService) {
    }

    ngOnInit() {
        this.authorService.getAllAuthors().subscribe(data => {
            this.authors = data
        });
    }

}
