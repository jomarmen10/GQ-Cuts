import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path={'/'} render={ ()=><Home/ >} />
        <Route exact path={'/pricing'} render={ ()=><Pricing/ >} />
      </Switch>
    </div>
  );
}

export default App;
