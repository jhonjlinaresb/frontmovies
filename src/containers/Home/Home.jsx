
//import logo from '../../logo.svg';
import React from 'react'
import './Home.scss'
import { Card, Image } from 'antd';

const Home = () => {
      
      return (

      <div className="home">
       <div className="App">
          <header className="App-header">
          <div className="card">   
          <a href="/login">
          <Card
          cover={
          <img
          alt="Login-user"
          src="https://i.ibb.co/9n7G1jC/image.png"
          />
                }
          >
         </Card>
          </a>
          </div>
          </header>
            </div>
      </div>
      );}

export default Home; 
