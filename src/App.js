import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Settings from './Settings';
import './Settings.css';
import BasicForm from "./BasicForm";

class App extends Component {
   render() {
      return (
         <Router>
            <div id="myId">

               <Switch>
                  <Route exact path='/' component={BasicForm} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;