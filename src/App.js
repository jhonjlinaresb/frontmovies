import React, { useState, useEffect } from 'react'
// import logo from './logo.svg';
//import {useEffect} from 'react';
//import {useState} from 'react';
import { Switch, BrowserRouter, Route, useParams } from 'react-router-dom'
import axios from 'axios';
import './App.css';

import Home from './containers/Home/Home'
import Register from './containers/Register/Register'
import Login from './containers/Login/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Movie = () =>{
  const [info, setInfo] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    axios.get('https://peliculasdb.herokuapp.com/movie/id/'+id)
    .then(res => {
        setInfo(res.data);
    }).catch((error)=>{
        setInfo(false);
    })
}, [])

  return (<div>
    {info
      ?<span className="movieViewer">
        <div className="movieImg">
          {<img className="images" src={"https://image.tmdb.org/t/p/w342" + info.poster_path} alt="poster of the movie"></img>}
        </div>
        <div>
          <div className="movieGrid"><h2>{info.title}</h2></div>
          <div className="movieGrid">{info.overview}</div>
          <div className="movieGrid">Average vote: {info.vote_average}</div>
        </div>  
      </span>
      :<span>Cargando...</span>
    }
    </div>);
}

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
          <Route path='/movie/:id' children={<Movie/>} exact />
        </Switch>
        <Footer/>
        </Route>
    </BrowserRouter>
  );
}

export default App;
