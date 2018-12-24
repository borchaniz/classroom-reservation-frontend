import {Genre} from './genre';
import {Discount} from './discount';
import {Author} from './author';

export class Book {
  id: number;
  title: string;
  synopsis: string;
  price: number;
  issuedOn: Date;
  genre: Genre = new Genre();
  activeDiscount:Discount;
  author:Author;
}
