import React from "react";
import MovieCard from "./Component/movie-card";

// map des cards de la page Movie card

const MovieContainer=(props)=>{

    return(
        <div className="Movie-Container">

            {
                props.aflem.map(movie=> <MovieCard movie={movie}/>)
            }

        </div>

    )

};export default MovieContainer