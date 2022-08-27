/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactSortable } from 'react-sortablejs';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ToDo from '../../components/TodoCards';
import { getBoardById } from '../../services/boards';
import { setSingleBoard } from '../../store/singleBoardSlice';
import { setColumns } from '../../store/columnsSlice';

function MainBoard() {
  // const [columns, setColumns] = useState([]);
  const [Task, setTask] = useState({});
  const dispatch = useDispatch();
  const singleBoard = useSelector(state => state.singleBoard.value);
  const columns = useSelector(state => state.columns.value);

  const { id } = useParams();
  let list = [];

  useEffect(() => {
    const fetchData = async () => {
      const SingleBoard = await getBoardById(id);
      const { Columns } = SingleBoard;
      dispatch(setSingleBoard(SingleBoard));
      dispatch(setColumns(Columns));
      list = Columns;
    };
    fetchData();
  }, []);

  const handleSubmit = event => {
    if (event.code === 'Enter' && event.target.value !== '') {
      if (event.target.value.length < 20) {
        const newColumn = {
          name: event.target.value,
          id: Date.now(),
          tasks: [],
          inputId: Date.now() + 1,
        };
        setColumns([...columns, newColumn]);
        event.target.value = '';
      } else {
        alert('The column name is too long');
      }
    }
  };

  const taskTaker = Taker => {
    setTask(Taker);
  };

  function setList(List) {
    dispatch(setColumns(List));
  }

  return (
    <div>
      <NavBar />
      <div className='mainBoard'>
        <header className='headerBoard'>
          <input
            className='nameBoard'
            type='text'
            placeholder=' Write a Tittle'
            defaultValue={singleBoard.title}
          />
          <a href='/'>
            {' '}
            <img className='iconsBoard' src='..\img\star-regular.png' alt='' />
          </a>
          <a href='/'>
            <img
              className='iconsBoard'
              src='..\img\share-square-solid.png'
              alt=''
            />{' '}
            Share
          </a>
        </header>
      </div>

      <div className='workSpace'>
        <div>
          <div>
            <input
              type='text'
              className='textContent buttonCard '
              onKeyDown={handleSubmit}
              placeholder='+ Add a list'
            />
            <div>
              <ReactSortable
                list={list}
                setList={setList}
                group='group'
                animation={150}
                className='list__Columns__Board'
                delay={20}
                chosenClass='sortable-chosen'
                dragClass='sortable-drag'
                ghostClass='sortable-ghost'
                tag='ul'
                handle='.columns__handler'
              >
                {singleBoard.columns
                  ? singleBoard.columns.map(column => (
                      <li key={column.id} className='columns'>
                        <ToDo
                          column={column}
                          taskTaker={taskTaker}
                          Task={Task}
                        />
                      </li>
                    ))
                  : null}
              </ReactSortable>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainBoard;
