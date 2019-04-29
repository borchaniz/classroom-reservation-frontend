import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GererReservationsRoutingModule } from './gerer-reservations-routing.module';
import {AddReservationComponent} from './add-reservation/add-reservation.component';
import {ListReservationsComponent} from './list-reservations/list-reservations.component';
import {FormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AddReservationComponent,
    ListReservationsComponent
  ],
  imports: [
    CommonModule,
    GererReservationsRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class GererReservationsModule { }
