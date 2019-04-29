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
import {SignupComponent} from './signup/signup.component';
import { ListSalleComponent } from './list-salle/list-salle.component';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    LayoutComponent,
    SignupComponent,
    ListSalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    SidebarModule,
    FormsModule,
    NgSelectModule

  ],
  providers: [UserService, FileService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
