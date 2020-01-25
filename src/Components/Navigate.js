import React, { Component } from 'react';
import News from './News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favs from './Favs';
import {Link} from "react-router-dom";




class Navigate  extends React.Component{

    render() {
        return (
          
            <Router>
    <Link to="News">
        <li>News</li>
    </Link>

    <Link to="Favs">
        <li>Favs</li>
    </Link>

    <Switch>
        <Route path="/News" component={News} />
        <Route path="/Favs" component={Favs} />
    </Switch>
      </Router >

        )
    
        }

}

export default Navigate;