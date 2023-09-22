const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@mail.com',
    password: '1234',
    RoleId: 1
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@mail.com',
    password: '1234',
    RoleId: 2,
    UserId: 1
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    email: 'johnsmith@mail.com',
    password: '1234',
    RoleId: 2,
    UserId: 1
  },
  {
    firstName: 'Admin',
    lastName: 'Perez',
    email: 'admin@mail.com',
    password: 'admin1234',
    RoleId: 1
  },
  {
    firstName: 'Encuestador',
    lastName: 'Perez',
    email: 'encuestador@mail.com',
    password: 'encuestador1234',
    RoleId: 2,
    UserId: 1
  }
];

module.exports = {
  users
};
