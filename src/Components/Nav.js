import React, {Component} from 'react';
import './App.css';
import {Link} from "react-router-dom";


function Nav(){

    const navstyle = {
        color: 'white'
    };

    return(

        <nav>

        <h3>News</h3>

        <ul className="nav-links" >

        <Link style={navstyle}  to = "News">
        <li>News</li>
        </Link>

        <Link style={navstyle} to = "Favs">
        <li>Favs</li>
        </Link>

        </ul>

         </nav>
    );

    

  

}


export default Nav;
