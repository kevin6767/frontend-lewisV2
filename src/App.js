import React, { Component } from 'react'
import {hot} from 'react-hot-loader';
import styles from './app.module';
import { Jumbotron } from './components/Jumbotron.js'
class App extends Component {
    render() {
        return (
            <div>
                <Jumbotron />
                <h1 className={styles.red}>Hello World! I'm working! Am I working?</h1>
               
            </div>
        )
    }
}

export default hot(module)(App);