export class RegisterUser {
  firstName: string;
  lastName:string;
  email: string;
  password: string;
  RoleId: number;

  constructor(firstName: string | null,  lastName:string | null, email: string | null, password: string | null, RoleId?: number | null) {
    
    this.firstName= firstName ? firstName : '';
    this.lastName= lastName ? lastName: '';
    this.email = email ? email : '';
      this.password = password ? password : '';
      this.RoleId = RoleId ? RoleId : 2;
  }
}
