
export class User {
  id: number;
  email = '';
  password = '';
  cPassword = '';
  name = '';
  familyName = '';
  phone: number;


  isValid() {
    return (this.name !== ''
      && this.familyName !== ''
      && this.email !== ''
      && this.password.length >= 6
      && this.cPassword === this.password
      && this.phone && this.validEmail());
  }

  validEmail() {
    const re = /\S+@\S+\.\S+/;
    return re.test(this.email);
  }
}
