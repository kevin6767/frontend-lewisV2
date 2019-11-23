import React, { Component } from 'react';
import {hot} from 'react-hot-loader';

import  Jumbotron  from './Jumbotron.js';
import  Top  from './Top.js';


const App = () =>
    <div>
        <Top />
        <Jumbotron />
    </div>

export default hot(module)(App);
