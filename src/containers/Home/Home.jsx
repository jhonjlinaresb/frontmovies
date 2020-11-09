import React, { Component } from 'react'
import logo from '../../logo.svg';
import './Home.scss'
import '../../App.css'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                            <p>
                            THIS IS THE HOME AREA
                            </p>
                    </header>
                </div>
            </div>

        )
    }
}

export default Home