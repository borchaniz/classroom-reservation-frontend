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
  image: string = null;

  isValid() {
    return this.title && this.title !== ''
      && this.synopsis && this.synopsis !== ''
      && this.price && this.price > 0
      && this.genre && this.author
      && this.image;
  }

}
