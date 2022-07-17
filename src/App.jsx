import './styles/styles.scss';
import {BrowserRouter,Route, Routes} from "react-router-dom";
//Pages
import SignUp from './pages/signup';
import LogIn from './pages/login';
import MainBoard from './pages/board';
import Home from './pages/home';
import CreateBoard from './pages/createBoard'

//components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path= "/signUp" element={<SignUp />}/>
        <Route path= "/logIn" element={<LogIn />}/>
        <Route path= "/board" element={<MainBoard />}/>
        <Route path= "/create_boards" element={<CreateBoard />}/>
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App;


