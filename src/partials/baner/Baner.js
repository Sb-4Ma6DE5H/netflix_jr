import React, { useEffect, useState } from 'react';
import { API_key, baceImageUrl } from "../../Constent/Constent";
import axios from '../../axios'


import './Baner.css'


function Baner() {
    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_key}&language=en-US`).then((Response) => {
            console.log(Response.data.results[19]);
            setMovie(Response.data.results[2])
        })
    }, [])


    return (
        <div style={{ backgroundImage: `url(${movie ? baceImageUrl + movie.backdrop_path : ''})` }} className="baner">
            <div className="fade">
            <div className="content">
                <h1 className="title">{movie?.title}</h1>
                <div className="baner_buttons">
                    <button className="button">play</button>
                    <button className="button">my list</button>
                </div>
                <h1 className="description">
                    {movie ? movie.overview : ''}
                </h1>
            </div>
            </div>

        </div>
    );
}

export default Baner;
