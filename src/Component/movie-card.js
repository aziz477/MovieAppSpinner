import React from "react";
import Rating from "./Rating";



const MovieCard=(props)=>{

return(

    <div className="movieCards">

        <div className="card" style={{width: '18rem'}}>
            <Rating count={props.movie.star} />

            <img src={props.movie.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{props.movie.year}-{props.movie.name}</p>

            </div>
        </div>

    </div>

)


};export default MovieCard;