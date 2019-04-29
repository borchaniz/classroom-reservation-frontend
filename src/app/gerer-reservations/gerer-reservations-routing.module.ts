import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListReservationsComponent} from './list-reservations/list-reservations.component';
import {AddReservationComponent} from './add-reservation/add-reservation.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListReservationsComponent
  },
  {
    path: 'add',
    component: AddReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GererReservationsRoutingModule { }
