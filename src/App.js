import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Register from './Components/LoginRegister/Register';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Register/> */}
      <Header/>
      <Home/>
      <Footer/>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/Header' exact>
    //       <Header/>
    //     </Route>
    //     <Route path='/Home' exact>
    //       <Home/>
    //     </Route>
    //     <Route path='/Play' exact>
    //       <Play/>
    //     </Route>
    //     <Footer/>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
