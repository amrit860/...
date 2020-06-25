import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import './sidenav.css';
import Homes from '../content/Homes';
export const Sidenav = () => {
    return (

        <Router>
            <div>
         < Link to='/homes' >Homes</Link> 
     
           </div>
        </Router>
    )
}


