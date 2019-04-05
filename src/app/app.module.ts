import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutes} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SidebarModule} from './sidebar/sidebar.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './shared/services/user.service';
import {FormsModule} from '@angular/forms';
import {FileService} from './shared/services/file.service';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {ListRoomsComponent} from './list-rooms/list-rooms.component';
import {AddClassroomComponent} from './add-classroom/add-classroom.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    LayoutComponent,
    ListRoomsComponent,
    AddClassroomComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    SidebarModule,
    FormsModule
  ],
  providers: [UserService, FileService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
