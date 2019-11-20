import React, { Component } from 'react'
import {hot} from 'react-hot-loader';
import './App.css';
import { Jumbotron } from './components/Jumbotron.js'
class App extends Component {
    render() {
        return (
            <div className="App">
                <Jumbotron />
                <h1>Hello World! I'm working! Am I working?</h1>
               
            </div>
        )
    }
}

export default hot(module)(App);