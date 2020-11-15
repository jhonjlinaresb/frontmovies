import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = ({user,setUser}) => {
    
    const logoutUser =()=>{
        localStorage.clear();
        // props.setUser(null)
        setUser(null)
    }

    return(
     <div className="header">
         <div className="logoContainer">
            <Link to='/'><span className="logo"></span></Link>
         </div>
         {user?
         <div>
            <div className="registerContainer">
                <Link to='/profile'><button className="registerButton">Profile</button></Link>
            </div>
            <div className="registerContainer">
                <Link to='/' onClick={logoutUser}><button className="registerButton">Logout</button></Link>
            </div>
         </div>
         :
        <div>
            <div className="registerContainer">
                <Link to='/login'><button className="registerButton">Login</button></Link>
            </div>
            <div className="registerContainer">
                <Link to='/register'><button className="registerButton">Register</button></Link>
            </div>
        </div>
         }

         
     </div>   
    )
}


export default Header;