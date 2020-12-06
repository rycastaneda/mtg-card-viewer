import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalState from './context/GlobalState';
import HomePage from './pages/index';
import "./styles.css";


const App = props => {
  return (
    <GlobalState>
      <HomePage />
      {/* <BrowserRouter> */}
        {/* <Switch> */}
          {/* <Route path="/" component={HomePage} exact /> */}
          {/* <Route path="/deck" component={DeckPage} exact /> */}
        {/* </Switch> */}
      {/* </BrowserRouter> */}
    </GlobalState>
  );
};

export default App;