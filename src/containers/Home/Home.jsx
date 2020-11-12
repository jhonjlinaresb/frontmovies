
//import logo from '../../logo.svg';
import React, { Component } from 'react'
import { Carousel } from 'antd'
import { Image } from 'antd'
import './Home.scss'

const contentStyle = {
  height: '550px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#3195FF',
};
class Home extends Component {
    render(){
        return (
    <div className="home">        
    <Carousel autoplay>
    <div>
    <h1 style={contentStyle}>
    <p>Welcome to Clinic Dental</p>
    <Image width={300} src="https://i.ibb.co/Ht0wZrK/dentalicon.png"/> 
    </h1>
    </div>
    <div>
    <h1 style={contentStyle}>
    <p>Services Odontologics</p>
    <Image width={400} src="https://i.ibb.co/KyP8CcL/dientes.png"/> 
    </h1>
    </div>
  </Carousel>
  </div>
  );}
}

export default Home; 

{/* <div className="home">
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                            <p>
                            THIS IS THE HOME AREA
                            </p>
                    </header>
                </div> */}
