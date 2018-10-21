import React, {Component} from 'react';
import './App.css';
import AnimalForm from "../animalsForm/AnimalsForm";
import {Alert} from 'reactstrap';
import {animalTypes, apiUrl} from "../constants";
import {getRandomInt} from "../helpers";

class App extends Component {
    state = {
        animalType: animalTypes[0],
        animalTypes: animalTypes,
        numberOfPhotos: '1',
        photos: [],
        error: false,
        pending: false
    };

    handleChange = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const animalType = this.state.animalType === 'random' ?
            this.state.animalTypes[getRandomInt()] : this.state.animalType;
        const numberOfPhotos = this.state.numberOfPhotos;
        this.setState({...this.state, pending: true});
        fetch(`${apiUrl}${animalType}?count=${numberOfPhotos}`)
            .then(response => response.json())
            .then(photos => this.setState({
                ...this.state,
                photos,
                pending: false
            }))
            .catch(error => this.setState({
                ...this.state,
                error: true,
                pending: false
            }));
    };

    render() {
        return (
            <div className="container">
                <h1 className="text-center">React Native Has Power</h1>
                <h2 className="text-center">Choose Animal</h2>
                <AnimalForm handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                            animalTypes={this.state.animalTypes}
                            numberOfPhotos={this.state.numberOfPhotos}
                            pending={this.state.pending}
                />
                {this.state.pending ?
                    <div className="lds-dual-ring"/> :
                    (this.state.error ?
                            <Alert color="danger">
                                There was an error when trying to fetch animals photos. Please try again.
                            </Alert> :
                            this.state.photos.map(
                                (photo, index) =>
                                    <img src={photo}
                                         alt="Animal"
                                         className="img-thumbnail"
                                         key={index}
                                    />
                            )
                    )}
            </div>
        );
    }
}

export default App;
