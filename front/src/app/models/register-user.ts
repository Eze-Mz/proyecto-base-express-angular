export class RegisterUser {
  getToken() {
    throw new Error('Method not implemented.');
  }
  name: string;
  lastName:string;
  email: string;
  password: string;

  constructor(name: string | null,  lastName:string | null, email: string | null, password: string | null) {
    this.name= name ? name : '';
    this.lastName= lastName ? lastName: '';
    this.email = email ? email : '';
      this.password = password ? password : '';
  }
}
