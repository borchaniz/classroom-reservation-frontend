import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutes, AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthorsComponent} from './authors/authors.component';
import {SidebarModule} from './sidebar/sidebar.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './shared/services/user.service';
import {AuthorService} from './shared/services/author.service';
import {BookService} from './shared/services/book.service';
import {FormsModule} from '@angular/forms';
import { GenresComponent } from './genres/genres.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthorsComponent,
    GenresComponent,
    BooksComponent,
    AddBookComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    SidebarModule,
    FormsModule
  ],
  providers: [UserService, AuthorService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
