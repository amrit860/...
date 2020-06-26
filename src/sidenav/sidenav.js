import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './sidenav.css';
export const Sidenav =()=> {
  
    
   
        return (

                <div className='sidenav'>
                    <h2>Amrit Acharya</h2>
                        <Link to='/homes'>Homes</Link>
                        <Link to='/about'>About</Link>
                        <Link to='skill'>Skill</Link>
                        <Link to='education'>Education</Link>
                        <Link to='/contact'>Contact</Link>
                    
                </div>
            
        )
    }




