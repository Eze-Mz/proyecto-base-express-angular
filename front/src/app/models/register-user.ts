export class RegisterUser {
  getToken() {
    throw new Error('Method not implemented.');
  }
  email: string;
  password: string;

  constructor(email: string | null, password: string | null) {
      this.email = email ? email : '';
      this.password = password ? password : '';
  }
}
