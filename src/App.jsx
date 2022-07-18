import './styles/styles.scss';
import {BrowserRouter,Route, Routes} from "react-router-dom";
//Pages
import SignUp from './pages/signup';
import LogIn from './pages/login';
import MainBoard from './pages/board';
import Home from './pages/home';
import ManageBoard from './pages/manageBoard'

//components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CreateBoard from './components/createBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/signUp" element={<SignUp />}/>
        <Route path= "/logIn" element={<LogIn />}/>
        <Route path= "/board" element={<MainBoard />}/>
        <Route path= "/create_boards" element={<CreateBoard />}/>
        <Route path= "/" element={<Home />}/>
        <Route path= "/manage_board" element={<ManageBoard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


