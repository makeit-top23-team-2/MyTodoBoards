import { createCard } from '../../services/cards';

export const handlerChange = (e, setTexto) => {
  setTexto(e.target.value);
};

export const handlerSubmit = async (
  e,
  Texto,
  column,
  Tasks,
  setTasks,
  board
) => {
  e.preventDefault();
  const object = {
    title: Texto,
    checked: false,
    columnId: column.id,
    column: column.id,
    board: board._id,
  };
  console.log('🚀 ~ file: handlers.js ~ line 23 ~ object', object);
  if (document.getElementById(column.inputId).value !== '') {
    const card = await createCard(column.id, object);
    console.log(
      '🚀 ~ file: handlers.js ~ line 16 ~ handlerSubmit ~ card',
      card
    );
    setTasks([...Tasks, card]);
    document.getElementById(column.inputId).value = '';
  } else {
    alert('Please, introduce a card.');
  }
};
export const handlerChangeCheck = (id, Tasks, setTasks) => {
  const newTasks = Tasks.map(task => {
    if (task.id === id) {
      task.checked = !task.checked;
    }
    return task;
  });
  setTasks(newTasks);
};
export const handlerDelete = (Tasks, setTasks) => {
  const newTasks = Tasks.filter(task => task.checked === false);
  setTasks(newTasks);
};
