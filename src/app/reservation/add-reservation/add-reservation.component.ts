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
    console.log('whaterver');
  }
}
