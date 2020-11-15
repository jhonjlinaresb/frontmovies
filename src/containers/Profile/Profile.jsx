import React from 'react'
import './Profile.scss'

function Profile() {
    let userData= localStorage.getItem.user;
    console.log(userData);
    return (
        <div className="profileContainer">
            <section>
                <div>

                </div>
            </section>

            <section>

            </section>
        </div>
    )
}

export default Profile
