import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MoviePage from "./Component/MoviePage";
import Spinner from "./Component/Spiner";




class App extends React.Component{

state={
    loading:true
}

componentDidMount() {
    setTimeout(()=>{

        this.setState({

            loading:!this.state.loading

        })

    },5000)


}

    render() {

        return (
            <div className="App">


                {(this.state.loading)? <Spinner/>:<MoviePage/> }


            </div>
        );
    }

    }

export default App;
