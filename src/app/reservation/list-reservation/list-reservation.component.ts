import { Component, OnInit } from '@angular/core';
import {Reservation} from '../../shared/models/reservation';
import {ReservationService} from '../../shared/services/reservation.service';
import {Utils} from '../../shared/Utils';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {

  constructor(private reservationService:ReservationService) { }

  reservations:Reservation[] = [];

  ngOnInit() {
    this.reservationService.getAllByUser().subscribe(data=>{
      this.reservations = data;
      Utils.initDataTable("reservations-table");
      this.reservations.forEach(item=>{
        item.start_date = Utils.displayDate(new Date(item.start_date));
        item.end_date = Utils.displayDate(new Date(item.end_date));
      })
    });
  }

}
