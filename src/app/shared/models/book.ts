import {Genre} from './genre';
import {Discount} from './discount';
import {Author} from './author';

export class Book {
  id: number;
  title: string;
  synopsis: string;
  price: number;
  genre: Genre = new Genre();
  activeDiscount: Discount;
  author: Author;

  isValid() {
    return this.title && this.title !== ''
      && this.synopsis && this.synopsis !== ''
      && this.price && this.price > 0
      && this.genre && this.author;
  }

}
