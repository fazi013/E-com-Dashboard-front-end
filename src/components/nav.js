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
        <div className="Nav_div Nav_ul" >
            <img  className="logo"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29e6XafI9sXYsDCYNP_W9FFLi_kquk9eJnA&s"/>
           { auth ?<ul>
            
                    <>
                <li><Link to='/'>Home Page</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/profile'>{JSON.parse(auth).name}</Link></li>
                <li><Link onClick={logout} to='/Signup'>Logout</Link></li></>
               </ul> 
                : <ul className="pre-auth">
                         <><li><Link to='/Signup'>Signup</Link></li>
                             <li><Link to='/login'>Login</Link></li></>
                             </ul>
                }

        
        </div >
    );
};

export default Nav;
