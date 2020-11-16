import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Admin.scss';

function Admin() {
    const [users,setUsers] = useState([])
    
    useEffect(() => {
        axios.get('https://peliculasdb.herokuapp.com/user/users')
        .then(res => {
            setUsers(res.data)
        })
        .catch(error => {console.log(error)});
        
    },[])
    
    return (
        <div className="aligned">
            {users.map(item=>{
                return (<div className="row">
                    {console.log(item)}
                    <div>Name: {item.name}</div>
                    <div>Email: {item.email}</div>
                    {item.rented
                    ?<div>Rented Movie: {item.rented}</div>
                    :<div></div>
                    }
                </div>)
            })}
        </div>
    )
}

export default Admin