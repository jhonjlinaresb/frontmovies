import React from 'react'
// import logo from './logo.svg';
//import {useEffect} from 'react';
//import {useState} from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Home from './containers/Home/Home'
import Register from './containers/Register/Register'
import Login from './containers/Login/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
//  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
//  useEffect(()=>(
//    setUser(localStorage.setItem('user',"token"),console.log("uno"))
//  ),[]); 
  return (
    <BrowserRouter>
      <Route>
        <Header/>
        <Switch>
        <Route path='/' exact >
          <Home ></Home>
        </Route>
        <Route path='/register' component={Register} exact />
        <Route path='/login' component={Login} exact />
          </Switch>
        <Footer/>
        </Route>
    </BrowserRouter>
  );
}

export default App;
