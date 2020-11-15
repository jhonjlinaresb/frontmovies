import React from 'react'
import './Profile.scss'

function Profile ({ user }) {
    let userData= localStorage.getItem.user;
    console.log(userData);
    return (
        <div className="profileContainer">
                <div className="userInformation">
                   <h3>Bienvenido {user?.email}</h3>
                </div>

                <div className="userMovie">
                    <h3>Your Movie {user?.user}</h3>
                </div>
        </div>
    )
}

export default Profile
