import React, { Fragment } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
// import { TransitionGroup, CSSTransition } from 'react-transition-group';


import './App.scss';
import Fifth from './components/fifth';
import FifthA from './components/fifthA';
import First from './components/first';
import FirstA from './components/firstA';
import Fourth from './components/fourth';
import FourthA from './components/fourthA';
import Home from './components/home';
import Result from './components/result';
import Second from './components/second';
import SecondA from './components/secondA';
import Seven from './components/seven';
import SevenA from './components/sevenA';
import Sixth from './components/sixth';
import SixthA from './components/sixthA';
import Third from './components/third';
import ThirdA from './components/thirdA';


function App() {

  return (
    <Router>
      <Fragment>
        <Switch>
          <Route path="/one">
            <First />
          </Route>
          <Route path="/oneA">
            <FirstA />
          </Route>
          <Route path="/two">
            <Second />
          </Route>
          <Route path="/twoA">
            <SecondA />
          </Route>
          <Route path="/three">
            <Third />
          </Route>
          <Route path="/threeA">
            <ThirdA />
          </Route>
          <Route path="/four">
            <Fourth />
          </Route>
          <Route path="/fourA">
            <FourthA />
          </Route>
          <Route path="/five">
            <Fifth />
          </Route>
          <Route path="/fiveA">
            <FifthA />
          </Route>
          <Route path="/six">
            <Sixth />
          </Route>
          <Route path="/sixA">
            <SixthA />
          </Route>
          <Route path="/seven">
            <Seven />
          </Route>
          <Route path="/sevenA">
            <SevenA />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Home />
          </ Route>
        </ Switch>
      </ Fragment>
    </Router>
  );
}

export default App;
