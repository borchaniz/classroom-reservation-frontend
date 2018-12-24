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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    SidebarModule,
  ],
  providers: [UserService, AuthorService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
