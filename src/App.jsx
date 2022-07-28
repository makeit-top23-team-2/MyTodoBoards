import React from 'react';
import './styles/styles.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/*
Pages
*/
import LogIn from './pages/login';
import SignUp from './pages/signup';
import MainBoard from './pages/board';
import Home from './pages/home';
import ManageBoard from './pages/manageBoard';
import NotFound from './pages/NotFound/NotFound';

/*
components
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/logIn' element={<LogIn />} />
        <Route path='/board' element={<MainBoard />} />
        <Route path='/' element={<Home />} />
        <Route path='/manage_board' element={<ManageBoard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
