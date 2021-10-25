import { Component } from "react";

class HornedBeast extends Component {
    render(){
        return(
            <section>
                <h2>{animalTitle}</h2>
                <img src = {imageUrl} alt = {animalTitle} title ={animalTitle}></img>
                <p>{descriptAnimal}</p>
            </section>
        )
    }
}

export default HornedBeast;