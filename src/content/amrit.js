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
import Homes from './Homes';

export class Amrit extends Component {
    render() {
        return (
            <div>
                <Router>
                   <Route path='/homes' component={Homes}></Route>
                </Router>
            </div>
        );
    }
}





    
   


