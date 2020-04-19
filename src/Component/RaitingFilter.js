import React from "react";
import Rating from "./Rating";
import MoviePage from "./MoviePage";

const RaitingFilter=(props)=>{


  return(

      <div className="RaitingFilter">

          <Rating count={props.count} change={props.change} />

      </div>

  )

};export default RaitingFilter