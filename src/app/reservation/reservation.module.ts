import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AddReservationComponent, ListReservationComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    NgSelectModule,
    FormsModule
  ]
})
export class ReservationModule { }
