import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <div >
                <Link className="btn btn-primary m-2" to="/">Inicio</Link> 
                <Link className="btn btn-primary m-2" to="/about">About</Link> 
                <Link className="btn btn-primary m-2" to="/contact">Contact</Link>
            </div>
    );
}
 
export default Navbar;