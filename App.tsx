import * as React from 'react';
import './style.css';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';


export default function App() {
  return (
    <div>

     <Router>
       <Navbar/>

       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/menu' element={<Menu/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
       </Routes>
     </Router>

    </div>
  );
}
