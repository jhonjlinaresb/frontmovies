import React, { Profiler } from 'react'
// import logo from './logo.svg';

import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Home from './containers/Home/Home'
import Register from './containers/Register/Register'
<<<<<<< HEAD
import Login from './containers/Login/Login'
=======
import Profile from './containers/Profile/Profile'
>>>>>>> feature/feature/UserProfile
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
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
<<<<<<< HEAD
          <Route path='/login' component={Login} exact />
=======
          <Route path='/profile' component={Profile} exact />
>>>>>>> feature/feature/UserProfile
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
