import {Component, OnInit} from '@angular/core';
import {SalleService} from '../shared/services/salle.service';
import {Salle} from '../shared/models/salle';
import {Utils} from '../shared/Utils';
import {TypeSalle} from '../shared/models/type-salle';
import {TypeSalleService} from '../shared/services/type-salle.service';

declare var swal: any;

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-salle.component.html',
  styleUrls: ['./list-salle.component.css']
})
export class ListSalleComponent implements OnInit {

  constructor(private salleService: SalleService, private typeSalleService: TypeSalleService) {
  }

  salles: Salle[] = [];
  types: TypeSalle[] = [];


  ngOnInit() {
    this.salleService.getAll().subscribe(data => {
      this.salles = data;
      this.salles.forEach(salle => {
        salle.type_salle_id = salle.type.id;
      });
      Utils.initDataTable('rooms-table');
    }, error => {
      swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
    });
    this.typeSalleService.getAll().subscribe(data => {
      this.types = data;
    });

  }
}
