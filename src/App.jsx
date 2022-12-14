import React from 'react';
import './styles/styles.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LogIn from './pages/login';
import MainBoard from './pages/board';
import Home from './pages/home';
import ManageBoard from './pages/manageBoard';
import NotFound from './pages/NotFound/NotFound';
import ActivateAccount from './pages/activateAccount';
import ForgotPassword from './pages/forgotPassword';
import Profile from './pages/profile';
import ProfileSettings from './pages/profileSettings';
import SignupForm from './pages/signupForm';
import PasswordChange from './pages/passwordChange';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/logIn' element={<LogIn />} />
        <Route path='/board/:id' element={<MainBoard />} />
        <Route path='/' element={<Home />} />
        <Route path='/manage-board/:userName' element={<ManageBoard />} />
        <Route path='/activate-account/:token' element={<ActivateAccount />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route
          path='/reset-password/:resetToken'
          element={<PasswordChange />}
        />
        <Route path='*' element={<NotFound />} />
        <Route path='/profile/:userName' element={<Profile />} />
        <Route
          path='/profile-settings/:userName'
          element={<ProfileSettings />}
        />
        <Route path='/signUp-form' element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
