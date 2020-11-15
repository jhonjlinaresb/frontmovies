import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return(
     <div className="header">
         <div className="logoContainer">
         <Link to='/'>
         <span className="logo"></span>
         </Link>
         </div>
         <div className="registerContainer">
         <Link to='/login'>
         <button className="registerButton">LOGIN</button>
         </Link>
         </div>
         <div className="registerContainer">
         <Link to='/register'>
         <button className="registerButton">REGISTER</button>
         </Link>
         </div>
         
     </div>   
    )
}


export default Header;