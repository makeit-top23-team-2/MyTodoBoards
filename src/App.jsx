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
import ActivateAccount from './pages/ActivateAccount';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/profile';
import ProfileSettings from './pages/profileSettings';
import SignupForm from './pages/signupForm';
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
        <Route path='/manage-board' element={<ManageBoard />} />
        <Route path='/activate-account/:id' element={<ActivateAccount />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile-settings' element={<ProfileSettings />} />
        <Route path='/signUp-form' element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
