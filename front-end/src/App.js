import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<h1>Products list</h1>}  />
        <Route path='/add' element={<h1>Products add</h1>}  />
        <Route path='/update' element={<h1>Products update</h1>}  />
        <Route path='/profile' element={<h1>Profile</h1>}  />
        <Route path='/logout' element={<h1>logout</h1>}  />
        </Route>
        <Route path='/signup' element={<Signup/>}  />
        <Route path='/login' element={<Login/>}  />
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
