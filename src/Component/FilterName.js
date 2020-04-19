import React from "react";


const FilterName=(props)=>{


// step : renvoyé les informations au parent par le child a l'aide d'un props
    return(

        <div className="FilterName">

            <input type="text" onChange={(event)=>props.Search(event.target.value)} className="form-control" />

        </div>

    )


};export default FilterName