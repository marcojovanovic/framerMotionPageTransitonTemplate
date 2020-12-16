import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import { AnimatePresence } from 'framer-motion';


import './page.css'

function PageAnimationApp() {
  return (
    <>
    
      <Router>
         <Header />
         <AnimatePresence exitBeforeEnter>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/services'>
                <Services/>
            </Route>

        </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default PageAnimationApp;
