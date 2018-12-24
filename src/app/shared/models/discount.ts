export class Discount {
  percentage: number;
  startDate: Date;
  endDate: Date;

  isValid() {
    return this.percentage && this.percentage > 0 && this.percentage < 100
      && this.startDate && this.endDate && this.startDate < this.endDate;
  }
}
