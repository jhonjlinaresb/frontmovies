import React from 'react';
import { useHistory } from 'react-router-dom'
import { notification } from 'antd';
import './Login.scss';
import axios from 'axios';

const Login = ({setUser}) => {
    const history = useHistory();
    const handleSubmit = event => {
      event.preventDefault(); // para evitar refrescar la página
      const user = {
        email: event.target.email.value,
        password: event.target.password.value
      }; 
      console.log(user)
      axios.post('https://peliculasdb.herokuapp.com/user/login', user)
      .then(res => {
         setUser(res.data) //seteo el user como estado del App.js
         localStorage.setItem('authToken', res.data.token);
         localStorage.setItem('user', JSON.stringify(res.data))
         notification.success({ message: 'Bienvenidos', description: user.email })
         setTimeout(() => {
          history.push('/')
         }, 1000);
      })
      .catch(error => { console.log(error);})
    };
   
  return (<form className="centered" onSubmit={handleSubmit} >
      <label>Email:<input name="email" type="email"/> </label>
      <label>Password:<input name="password" type="password"/></label>
    <input type="submit" value="Submit"/>
  </form>);
}

export default Login;