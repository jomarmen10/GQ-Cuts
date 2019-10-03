import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path={'/'} render={ ()=><Home/ >} />
      </Switch>
    </div>
  );
}

export default App;
