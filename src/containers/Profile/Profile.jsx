import React from 'react'
import './Profile.scss'

function Profile ({ user, movie }) {
    let userData= localStorage.getItem.user;
    console.log(userData);
    return (
        <div className="profileContainer">
                <div className="userInformation">
                   <img id="userLogo" src="https://i.ibb.co/9n7G1jC/image.png" alt="user"></img>
                   <h3>Bienvenido: {user?.email}</h3>
                </div>

                <div className="userMovie">
                    <h3>Your Movie {user?.user}</h3>
                     <h5>You have a movie rent{movie?.id}</h5>
                </div>
        </div>
    )
}

export default Profile
