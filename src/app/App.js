import React, {Component} from 'react';
import './App.css';
import AnimalForm from "../animalsForm/AnimalsForm";

class App extends Component {
    state = {
        animalType: 'shibes',
        numberOfPhotos: '1',
        photos: []
    };

    handleChange = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submit');
    };

    render() {
        return (
            <div className="container">
                <h1 className="text-center">React Native Has Power</h1>
                <h2 className="text-center">Choose Animal</h2>
                <AnimalForm handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                            animalType={this.state.animalType}
                            numberOfPhotos={this.state.numberOfPhotos}
                />
            </div>
        );
    }
}

export default App;
