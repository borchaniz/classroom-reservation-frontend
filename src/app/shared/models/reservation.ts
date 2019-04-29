import {User} from './user';
import {Salle} from './salle';
import {Organisme} from './organisme';

export class Reservation {
  id: number;
  start_date: any;
  end_date: any;
  description: string;
  other_needs: string;
  status: number;
  user: User;
  salle: Salle;
  organisme: Organisme;
  user_id: number;
  salle_id: number;
  organisme_id: number;
}
