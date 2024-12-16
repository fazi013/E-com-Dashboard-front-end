import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('user');
    const Navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        Navigate('/Signup');
    }
    return (
        <div className="Nav_div" >
            <ul className="Nav_ul">
                <li><Link to='/'>Home Page</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li>{auth ? <Link onClick={logout} to='/Signup'>Logout</Link> :
                    <Link to='/Signup'>Signup</Link>}</li>
                <li><Link to='/login'>Login</Link></li>

            </ul>
        </div>
    );
};

export default Nav;
