<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
=======
import React from 'react'
// import logo from './logo.svg';

import { Switch, BrowserRouter, Route } from 'react-router-dom'
>>>>>>> 82dd965a6aeaf70a43b7e0969df3ba519cde9941
import './App.css';

import Home from './containers/Home/Home'
import Register from './containers/Register/Register'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Route>
        <Header/>
        <Switch>
        <Route path='/' component={Home} exact />
          <Route path='/register' component={Register} exact />
          </Switch>
        <Footer/>
        </Route>
    </BrowserRouter>
//   <div className="App">
//     <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//             <p>
//                 Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//             Learn React
//             </a>
//     </header>
// </div>
  );
}

export default App;
