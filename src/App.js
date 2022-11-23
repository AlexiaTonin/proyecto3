import './App.css';
import Home from './Components/Home/Home';
import Register from './Components/LoginRegister/Register';
import Play from './Components/Play/Play';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";


function App() {
  const redirect = useLocation();
  return (
    <>
      {
        redirect.pathname !== '/' && <Header/>
      }
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/play' element={<Play/>}/>
        </Routes>
      {
        redirect.pathname !== '/' && <Footer/>
      }
    </>
  );
}

export default App;
