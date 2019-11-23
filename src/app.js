import React from 'react';
import {hot} from 'react-hot-loader';
import Jumbotron from './components/jumbotron.js';
import Top from './components/top.js';

const App = () =>
    <div>
        <Top />
        <Jumbotron />
    </div>

export default hot(module)(App);
