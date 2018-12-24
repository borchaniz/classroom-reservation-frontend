import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';
import {SidebarModule} from './sidebar/sidebar.module';
import {NguiMapModule} from '@ngui/map';

import {DashboardComponent} from './dashboard/dashboard.component';
import { AuthorsComponent } from './authors/authors.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        AuthorsComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),
        SidebarModule,
        NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
