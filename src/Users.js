const Users = [
  {
    name: 'David',
    img: '',
    userName: 'Davincho',
    email: 'davincho@gmail.com',
    password: '1234567890abc',
    boards: [],
  },
  {
    name: 'Mauro',
    img: '',
    userName: 'Mauhack',
    email: 'Mauhack@gmail.com',
    password: 'abc123123',
    boards: [],
  },
  {
    name: 'Bryan',
    img: '',
    userName: 'Bxtard',
    email: 'bxtard@gmail.com',
    password: 'wsl321',
    boards: [],
  },
  {
    name: 'Guillo',
    img: '',
    userName: 'Guillocuras',
    email: 'guillocuras@gmail.com',
    password: 'cba321',
    boards: [
      {
        Tittle: tablero1,
        Description: 'este es el primer tablero',
        listas: [
          {
            name: 'todo',
            tareas: [],
          },
          {
            name: 'doing',
            tareas: [],
          },
          {
            name: 'done',
            tareas: [],
          },
        ],
      },
    ],
  },
];

export default Users;
