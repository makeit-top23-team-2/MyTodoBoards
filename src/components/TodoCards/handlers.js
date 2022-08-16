export const handlerChange = (e, setTexto) => {
  setTexto(e.target.value);
};

export const handlerSubmit = (e, Texto, column, Tasks, setTasks) => {
  e.preventDefault();
  const object = {
    title: Texto,
    checked: false,
    id: Date.now(),
    columnId: column.id,
  };
  if (document.getElementById(column.inputId).value !== '') {
    setTasks([...Tasks, object]);
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
