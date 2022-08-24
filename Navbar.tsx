import * as React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
  return(
    <div>
       <Link to='/'>Home</Link>&nbsp;&nbsp;
       <Link to='/menu'>Menu</Link>&nbsp;&nbsp;
       <Link to='/contact'>Contact</Link>
    </div>
  )
}
export default Navbar;