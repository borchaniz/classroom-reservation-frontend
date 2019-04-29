import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {SignupComponent} from './signup/signup.component';
import {ListSalleComponent} from './list-salle/list-salle.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: 'reservation',
        loadChildren:'./reservation/reservation.module#ReservationModule'
      }, {
        path: 'salle',
        component:ListSalleComponent
      }
    ]
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
