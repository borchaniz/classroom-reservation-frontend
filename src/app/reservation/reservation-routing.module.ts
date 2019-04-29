import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddReservationComponent} from './add-reservation/add-reservation.component';
import {ListReservationComponent} from './list-reservation/list-reservation.component';

const routes: Routes = [
  {path:'add',component:AddReservationComponent},
  {path:'list',component:ListReservationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule {
}
