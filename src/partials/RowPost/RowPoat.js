import React, {useEffect, useState } from 'react'
import { baceImageUrl,API_key } from "../../Constent/Constent";
import  YouTubeEvent  from 'react-youtube';

import axios from '../../axios'

import './RowPost.css'
function RowPoat(props) {
    const [movie, setMovie] = useState([])
    const [UrlId,setUrlId] = useState('')
    useEffect(()=>{
        axios.get(`${props.url}`).then(Response=>{
            console.log(Response.data);
            setMovie(Response.data.results)
        }).catch(err=>{
            alert('network error')
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
        //   https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie = (id) =>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_key}&language=en-US`).then(Response=>{
            console.log(Response.data);
            if(Response.data.results.length!==0){
                setUrlId(Response.data.results[0])
            }
            else{
console.log('arrey empty');
            }
        })
      }
    return (
        <div className='row'>
            <h1 className='rowtitle'>{props.title}</h1>

            <div className="posters">
                {movie.map((object)=>{
                   return(
                <img onClick={()=>handleMovie(object.id)} className={props.isSmall ? 'small-poster-img' :'poster-img'} src={`${baceImageUrl+object.backdrop_path}`} alt="poster" />
                )
                })}
            </div>
            {UrlId && <YouTubeEvent opts={opts} videoId={UrlId.key}/>}

        </div>
    )
}

export default RowPoat
