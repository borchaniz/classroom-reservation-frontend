import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ReservationService} from '../../shared/services/reservation.service';
import {Reservation} from '../../shared/models/reservation';
import {User} from '../../shared/models/user';
import {UserService} from '../../shared/services/user.service';
import {SalleService} from '../../shared/services/salle.service';
import {Salle} from '../../shared/models/salle';
import {Organisme} from '../../shared/models/organisme';
import {OrganismeService} from '../../shared/services/organisme.service';

declare var swal: any;


@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})


export class AddReservationComponent implements OnInit {

  constructor(private router: Router,
              private reservationService: ReservationService,
              private userService: UserService,
              private salleService: SalleService,
              private organismeService: OrganismeService) {
  }


  reservation: Reservation = new Reservation();
  user: User;
  salles: Salle[] = [];
  organismes: Salle[] = [];
  reservations: Reservation[] = [];

  ngOnInit() {
    this.userService.getAuthUser().subscribe(data => {
      this.user = data;
    });

    this.salleService.getAll().subscribe((data: any) => {
      this.salles = data;
    });

    this.organismeService.getAll().subscribe((data: any) => {
      this.organismes = data;
    });

    this.reservationService.getAll().subscribe((data: any) => {
      this.reservations = data;
    });
  }

  saveReservation() {
    this.reservationService.create(this.reservation).subscribe(data => {
      swal({title: 'Succès', text: 'Opération Terminée avec succès', type: 'success'}).then((result) => {
        this.router.navigateByUrl('/list-reservation');
      });
    }, error => {
      swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
    });
  }
}
