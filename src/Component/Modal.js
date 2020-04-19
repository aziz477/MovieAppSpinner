import React, {Component} from 'react';
import Modal from 'react-modal' ;

class Modall extends Component {

    state={

        modalIsOpen:false,
        img:"",
        name:"",
        year:"",
        star:""
};

openModal =()=>{

        this.setState({ modalIsOpen:true})

};

closeModal =()=>{
    this.setState({ modalIsOpen:false})
};

add=()=>{
    //event.preventDefault()
    const {img,name,year,star}=this.state
this.props.add(img,name,year,star);
    this.closeModal();
};

handlechange =(event)=>{

    this.setState({

       [event.target.name]:event.target.value

    })

}

    render() {
        return (
            <div className="">

              <button className="btn btn-success"  onClick={this.openModal} >
                <span role="img" aria-label="add" >
                    {" "}
                </span>
                 Add new film
              </button>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    classeName="modall"
                    contentLabel="Example Modal"

                >

                    <form>

                        <label for="fname" >Film Name</label>
                        <input
                         type="text"
                         id="fname"
                         name="name"
                         placeholder="Film name..."
                         onChange={this.handlechange}
                        />

                        <label htmlFor="fYear">Film Year</label>
                        <input
                            type="text"
                            id="fYear"
                            name="year"
                            placeholder="Film Year..."
                            onChange={this.handlechange}

                        />

                        <label htmlFor="fraiting">Film Raiting</label>
                        <input
                            type="text"
                            id="fraiting"
                            name="star"
                            placeholder="Film name..."
                            onChange={this.handlechange}

                        />

                        <label htmlFor="fimg">image URL...</label>
                        <input
                            type="text"
                            id="fimg"
                            name="img"
                            placeholder="Film name..."
                            onChange={this.handlechange}
                        />

                        <button  onClick={(event)=>this.add(event)}   className="btn btn-success"   value="Add film"  >Add new movie</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default Modall;
