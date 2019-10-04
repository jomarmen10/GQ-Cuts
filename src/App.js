import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing'
import Schedule from './components/Schedule/Schedule'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path={'/'} render={ ()=><Home/ >} />
        <Route exact path={'/pricing'} render={ ()=><Pricing/ >} />
        <Route exact path={'/schedule'} render={()=><Schedule/>} />
      </Switch>
    </div>
  );
}

export default App;
