import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
         <nav className="navbar navbar-expand-md bg-dark navbar-dark justify-content-center d-flex ">
             <Link to="/" className="navbar-brand">Logo</Link>

             <ul className="navbar-nav text-white">
                 <li className="nav-item"> <Link to="/" className="nav-link">Home</Link></li>
                 <li className="nav-item"> <Link to="/news" className="nav-link">News</Link></li>
                 <li className="nav-item"> <Link to="/technology" className="nav-link">Technology</Link></li>
                 <li className="nav-item"> <Link to="/about" className="nav-link">About us</Link></li>
             </ul>


         </nav>
        </>
    );
};

export default Navbar;