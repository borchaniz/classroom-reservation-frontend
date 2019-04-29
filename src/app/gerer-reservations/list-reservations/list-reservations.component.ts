import { Component, OnInit } from '@angular/core';
import {Reservation} from '../../shared/models/reservation';
import {ReservationService} from '../../shared/services/reservation.service';
import {User} from '../../shared/models/user';
import {UserService} from '../../shared/services/user.service';
import {Utils} from '../../shared/Utils';

declare var swal: any;

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.css']
})
export class ListReservationsComponent implements OnInit {

  user: User;
  reservations: Reservation[] = [];
  newReservations: Reservation[] = [];
  oldReservations: Reservation[] = [];

  constructor(private reservationService: ReservationService,
              private userService: UserService) {
  }

  ngOnInit() {
    const baseContext = this;
    this.userService.getAuthUser().subscribe(data => {
      baseContext.user = data;
      setTimeout(function () {
        baseContext.reservationService.getAllByUser().subscribe(data2 => {
          baseContext.oldReservations = data2.filter(item => item.status == 2 || item.status == 1);
          baseContext.newReservations = data2.filter(item => !item.status || item.status == 3);
          baseContext.newReservations.forEach(item => {
            item.start_date = Utils.displayDate(new Date(item.start_date));
            item.end_date = Utils.displayDate(new Date(item.end_date));
          });
          baseContext.oldReservations.forEach(item => {
            item.start_date = Utils.displayDate(new Date(item.start_date));
            item.end_date = Utils.displayDate(new Date(item.end_date));
          });
          baseContext.reservations = baseContext.newReservations;
          Utils.initDataTable('reservations-table');
        });
      }, 20);
    });
  }


  deleteReservation(i: number) {
    swal({
      title: 'Attention',
      text: 'Êtes vous surs de vouloir supprimer cet élément?',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then(result => {
      if (result) {
        this.reservationService.delete(this.reservations[i].id).subscribe(data => {
          swal('Succès', 'Opération Terminée avec succès', 'success');
          this.reservations.splice(i, 1);
        }, error => {
          swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
        });
      }
    });
  }

}
