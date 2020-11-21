import React from 'react'
import HomePage from './HomePage'
import MainPage from './MainPage'
import AboutPage from './AboutPage'

import {HashRouter as Router,Switch,Route, } from 'react-router-dom'
import FullCard from './FullCard'
import musagim from './musagim'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './transition.css'
export default function App() {
  return (
    <>
    <Router>
      <Route render={({location}) => (
        <TransitionGroup>
        <CSSTransition
            key={location.pathname}
            timeout={300}
            classNames="page"
          >
            <Switch>
              <Route path="/main/:title"  data={musagim} component={FullCard}/>
              <Route path="/main" component={MainPage}/>
              <Route path="/about" component={AboutPage}/>
              <Route exact path="/" component={HomePage}/>
            </Switch>
        </CSSTransition>
      </TransitionGroup>
      )}>
      </Route>
    </Router>
    </>
  );
}
