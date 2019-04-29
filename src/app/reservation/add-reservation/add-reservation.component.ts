import {Component, OnInit} from '@angular/core';
import {Reservation} from '../../shared/models/reservation';
import {OrganismeService} from '../../shared/services/organisme.service';
import {Organisme} from '../../shared/models/organisme';
import {Salle} from '../../shared/models/salle';
import {SalleService} from '../../shared/services/salle.service';
import {ReservationService} from '../../shared/services/reservation.service';

declare var swal: any;

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  reservation: Reservation = new Reservation();
  organisms: Organisme[] = [];
  salles: Salle[] = [];
  activeSalles: Salle[] = [];

  constructor(private organismeService: OrganismeService,
              private salleService: SalleService,
              private reservationService: ReservationService) {

  }

  ngOnInit() {
    this.organismeService.getAll().subscribe(data => {
      this.organisms = data;
    });
    this.salleService.getAll().subscribe(data => {
      this.salles = data;
      this.activeSalles = data;
    });

  }

  invalidForm() {
    return !this.reservation.isValid();
  }

  saveReservation() {
    if (this.invalidForm()) return;
    this.reservationService.create(this.reservation).subscribe(data => {
      this.reservation = new Reservation();
      swal('Succès', 'Opération Terminée avec succès!', 'success');
    }, error => {
      swal('Error', 'Une erreur est survenue! Veuillez réessayer plus tard!', 'error');
    });
  }

  onDatesChange() {
    if (!this.reservation.start_date || !this.reservation.start_date) return;
    this.activeSalles = this.salles.filter(item => this.available(item));
  }

  private available(salle: Salle) {
    // console.log(new Date( this.reservation.start_date).getTime(),this.salles[0].reservations[0].start_date);
    for (let item of salle.reservations) {
      if (item.start_date >= new Date(this.reservation.start_date).getTime() && item.start_date <=new Date(this.reservation.end_date).getTime()
        || item.end_date >= new Date(this.reservation.start_date).getTime() && item.end_date <= new Date(this.reservation.end_date).getTime()
        || new Date(this.reservation.start_date).getTime() >= item.start_date && new Date(this.reservation.start_date).getTime() <= item.end_date
        || new Date(this.reservation.end_date).getTime() >= item.start_date && new Date(this.reservation.end_date).getTime() <= item.end_date
      ) return false;
    }
    return true;
  }
}
