import React, {Component} from 'react';
import './App.css';
import AnimalForm from "../animalsForm/AnimalsForm";

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">React Native Has Power</h1>
                <h2 className="text-center">Choose Animal</h2>
                <AnimalForm />
            </div>
        );
    }
}

export default App;
