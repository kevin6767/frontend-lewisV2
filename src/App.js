import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import styles from './App.module.scss';
import { Jumbotron } from './components/Jumbotron.js';
class App extends Component {
    render() {
        return (
            <div>
                <h2 className={styles.red}>Hello World! I'm working Am I working</h2>
                <Jumbotron />
                
               
            </div>
        )
    }
}

export default hot(module)(App);