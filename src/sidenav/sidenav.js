import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './sidenav.css';
export class Sidenav extends Component {
  
    
    render() {
        return (

            <Router>
                <div>
                        <Link to='/homes'>Homes</Link>
                    
                </div>
            </Router>
        )
    }

}


