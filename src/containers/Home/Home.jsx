//import logo from '../../logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss';


const Home =() =>{
    const [movie, setmovie] = useState([]);
    const Movies =()=>{
         useEffect(() => {
             axios.get('https://peliculasdb.herokuapp.com/movie')
             .then(res=>{
                setmovie(res.data?.map(item=>{
                    return(item)}));
            })
        },[]);
        return(<div></div>);
    }
    return ( 
        <div className="moviesContent">
            User has a token
            <div className="movies">
                <Movies className="moviesOrder">{console.log("uno")}
                </Movies>
            </div>
        </div>      
    )
} 

export default Home;