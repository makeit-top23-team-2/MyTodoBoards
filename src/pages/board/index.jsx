/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactSortable } from 'react-sortablejs';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ToDo from '../../components/TodoCards';
import { getBoardById, updateBoard } from '../../services/boards';
import { setSingleBoard } from '../../store/singleBoardSlice';
import { setColumns } from '../../store/columnsSlice';
import { createColumnByBoardId } from '../../services/columns';

function MainBoard() {
  const [columns, setColumns1] = useState([]);
  const [Task, setTask] = useState({});
  const dispatch = useDispatch();
  const singleBoard = useSelector(state => state.singleBoard.value);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const board = await getBoardById(id);

      const Columns = board.columns;
      dispatch(setSingleBoard(board));
      dispatch(setColumns(Columns));
      setColumns1(Columns.map(column => ({ ...column, id: column._id })));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const boardUpdate = async () => {
      await updateBoard(id, { columns });
      const columnsOrdered = columns.map(column => ({
        ...column,
        chosen: false,
      }));
      dispatch(setColumns(columnsOrdered));
      dispatch(setSingleBoard(singleBoard));
    };

    if (columns.length) {
      boardUpdate();
    }
  }, [columns]);

  const handleSubmit = async event => {
    if (event.code === 'Enter' && event.target.value !== '') {
      if (event.target.value.length < 20) {
        const columnTitle = event.target.value;
        const newColumn = await createColumnByBoardId(id, {
          title: columnTitle,
        });
        newColumn.id = newColumn._id;
        setColumns1([...columns, newColumn]);
        event.target.value = '';
      } else {
        alert('The column name is too long');
      }
    }
  };

  const taskTaker = Taker => {
    setTask(Taker);
  };

  return (
    <div>
      <NavBar />
      <div className='mainBoard'>
        <header className='headerBoard'>
          <input
            className='nameBoard'
            type='text'
            placeholder=' Write a title for this board'
            defaultValue={singleBoard.title}
          />
          {/*           <a href='/'>
            {' '}
            <img className='iconsBoard' src='..\img\star-regular.png' alt='' />
          </a> */}

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
                list={columns}
                setList={setColumns1}
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
                {columns?.map(column => (
                  <li key={column.id} className='columns'>
                    <ToDo column={column} taskTaker={taskTaker} Task={Task} />
                  </li>
                ))}
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

/* import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactSortable } from 'react-sortablejs';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ToDo from '../../components/TodoCards';
import { getBoardById } from '../../services/boards';
import { setSingleBoard } from '../../store/singleBoardSlice';
import { setColumns } from '../../store/columnsSlice';
import { createColumnByBoardId } from '../../services/columns';

function MainBoard() {
  const [Task, setTask] = useState({});
  const dispatch = useDispatch();
  const singleBoard = useSelector(state => state.singleBoard.value);
  const columns = useSelector(state => state.columns.value);
  console.log('🚀 ~ file: index.jsx ~ line 17 ~ MainBoard ~ columns', columns);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const SingleBoard = await getBoardById(id);
      const Columns = SingleBoard.columns;
      console.log(
        '🚀 ~ file: index.jsx ~ line 26 ~ fetchData ~ Columns',
        Columns
      );
      dispatch(setSingleBoard(SingleBoard));
      dispatch(setColumns(Columns));
    };
    fetchData();
  }, []);

  const handleAddColumn = async event => {
    event.preventDefault();
    if (event.code === 'Enter' && event.target.value !== '') {
      if (event.target.value.length < 20) {
        const columnTitle = event.target.value;
        const newColumn = await createColumnByBoardId(id, columnTitle);
        console.log(
          '🚀 ~ file: index.jsx ~ line 37 ~ handleSubmit ~ newColumn',
          newColumn
        );
        dispatch(setColumns([...columns, newColumn]));

        event.target.value = '';
      } else {
        alert('The column name is too long');
      }
    }
  };

  const taskTaker = Taker => {
    setTask(Taker);
  };

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
              onKeyDown={handleAddColumn}
              placeholder='+ Add a list'
            />
            <div className>
              {columns?.map ? (
                <ReactSortable
                  list={columns.map(x => ({ ...x, chosen: true }))}
                  setList={newColumns => dispatch(setColumns(newColumns))}
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
                  {columns.map(column => (
                    <li key={column._id} className='columns'>
                      <ToDo column={column} taskTaker={taskTaker} Task={Task} />
                    </li>
                  ))}
                </ReactSortable>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainBoard;
 */
