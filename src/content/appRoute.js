// import React, { Component }  from 'react';
// import {Route} from 'react-router-dom';
// const Home=()=>{
//     return<p>Hello,Whats Up</p>
// }
// const Amrit=()=>{
//     return(
//         <div>


//             <Route path='/home' component={Home}></Route>

//         </div>
//     )
// }
// export default Amrit;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Sidenav } from '../sidenav/sidenav';
import { Homes } from './homes';
import { render } from '@testing-library/react';

const  AppRoute =()=>{

    
        return (
            <div>
                <Router>
                    <Route exact path="/" render={()=><Sidenav></Sidenav>}></Route>
                    <Route path="/homes" render={()=><Homes></Homes>}></Route>
                </Router>
            </div>
        );
    }

   
export default AppRoute;













