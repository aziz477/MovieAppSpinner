import React, {Component} from 'react';
import movies from "../movies-data";
import MovieContainer from "../Movie-container";
import FilterName from "./FilterName";
import RaitingFilter from "./RaitingFilter";
import Modall from "./Modal";

class MoviePage extends Component {

    state={
        movies,
        movieName:"",
        Raitingcountfilter:0
    }

    // step 1 :callBackfunction ou fonction de rappel
handleSearch=(input)=>{

        this.setState({
            movieName:input,

        })

}

handleRaitingfilter=(newRaiting)=>{

        this.setState({
            Raitingcountfilter:newRaiting
        })



}

// fonction de rappel
addMovie=(img,name,year,star)=>{

        this.setState({

            movies:[...this.state.movies,{img:img,name:name,year:year,star:star}]

        })

}

    render() {

       let filterMovie= this.state.movies.filter(
           (movie)=> (movie.star >= this.state.Raitingcountfilter) && (movie.name.toLowerCase().includes(this.state.movieName.toLowerCase()))) ;

        return (
            <div>

                <div className="filterContainer">
                    <FilterName Search={this.handleSearch}/>
                    <RaitingFilter count={this.state.newRaiting} change={this.handleRaitingfilter}/>
                    <Modall add={this.addMovie}/>

                </div>
            <MovieContainer aflem={filterMovie}/>

            </div>
        );
    }
}

export default MoviePage;