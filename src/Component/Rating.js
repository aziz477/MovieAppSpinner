import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";


const Rating=(props)=>{




    let star=[];

    for (let i = 0 ; i<5; i++){

        if(i<props.count){

            star.push(<span onClick={()=>props.change(i+1)}><IoIosStar /></span>)

        }
        else {
            star.push(<span onClick={()=>props.change(i+1)}><IoIosStarOutline/></span>)
        }


    } return <div className="card-movie-rating">{star}</div>



};export default Rating