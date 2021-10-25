import { Component } from "react";

class HornedBeast extends Component {
    render(){
        return(
            <section>
                <h2>{this.props.animalTitle}</h2>
                <img src = {this.props.imageUrl} alt = {this.props.descriptAnimal} title ={this.props.animalTitle}></img>
                <p>{this.props.descriptAnimal}</p>
            </section>
        )
    }
}

export default HornedBeast;