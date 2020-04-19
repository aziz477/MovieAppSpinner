import Loader from 'react-loader-spinner';
import React from "react";


  const Spinner =()=> {


        return(
            <Loader
                type="Puff"
                color="red"
                height={100}
                width={100}
                timeout={5000} //5 secs
                style={{marginTop:'250px'}}
            />
        );
    }
;export default Spinner