import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthorsComponent} from './authors/authors.component';
import {GenresComponent} from './genres/genres.component';
import {BooksComponent} from './books/books.component';
import {AddBookComponent} from './add-book/add-book.component';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'authors',
        component: AuthorsComponent
      },
      {
        path: 'genres',
        component: GenresComponent
      },
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'add-book',
        component: AddBookComponent
      }
    ]
  }, {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
