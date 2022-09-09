import Swal from 'sweetalert2';
import { createCard } from '../../services/cards';
import { getUserByEmail } from '../../services/users';

export const handlerChange = (e, setTexto) => {
  setTexto(e.target.value);
};

export const handlerSubmit = async (
  e,
  texto,
  column,
  tasks,
  setTasks,
  board
) => {
  e.preventDefault();
  const profile = JSON.parse(localStorage.getItem('profile'));
  const user = await getUserByEmail(profile.email);
  const object = {
    title: texto,
    checked: false,
    columnId: column.id,
    column: column.id,
    board: board._id,
    creator: user._id,
  };

  if (document.getElementById(column.inputId).value !== '') {
    const card = await createCard(column.id, object);
    setTasks([...tasks, card]);
    document.getElementById(column.inputId).value = '';
  } else {
    Swal.fire({
      title: 'Please, introduce a card!',
      text: 'Write a title for the card.',
      icon: 'warning',
      confirmButtonText: 'Got it!',
    });
  }
};
