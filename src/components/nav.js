import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="Nav_div" >
            <ul className="Nav_ul">
                <li><Link to='/'>Home Page</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
                <li><Link to='/Signup'>Signup</Link></li>
            </ul>
        </div>
    );
};

export default Nav;
