import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './compnents/Main';
import Address from './compnents/Add';

const Routes=() =>{
  return (
    <div>
    <Router>
        <Switch>
          <Route key={'/add'} exact path={'/add'} component={Address}/>
          <Route key={'/addressIdComponent'} exact path="/add/:id?" component={Address}/>
          <Route key={'/Main'} exact path={'/'} component={Main}/>
        </Switch>
    </Router>
    </div>
  );
}

export default Routes;