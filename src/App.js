import React from 'react';
// import logo from './logo.svg';

import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Profile from './containers/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './containers/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Route>
        <Header/>
        <Switch>
        <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/profile' component={Profile} exact />
          </Switch>
        <Footer/>
        </Route>
    </BrowserRouter>
  );
}

export default App;
