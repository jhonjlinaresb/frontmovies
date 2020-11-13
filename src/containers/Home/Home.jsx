//import logo from '../../logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss';


const Home =() =>{
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        axios.get('https://peliculasdb.herokuapp.com/movie/')
        .then(res => {
            setmovie(res.data)
        })
        .catch(error => {console.log(error)});
    }, [])
    
    const Movies =()=>{
        
        return(<div>
            {movie?.map(item=>{
                console.log(item)
                return (<div className="grid">
                            <div className="movieGrid">{item.title}</div>
                            {<img className="images" src={"https://image.tmdb.org/t/p/w185" + item.poster_path} alt="poster of the movie"></img>}
                            <div className="movieGrid">Average vote: {item.vote_average}</div>
                        </div>)
            })}
        </div>);
    }
    return (             
    <div>
        <div className="center">
        User has a token
        </div>
        <div className="moviesContent">
            <div className="movies">
                    <Movies></Movies>
            </div>
        </div>    
    </div>
  
    )
} 

export default Home;