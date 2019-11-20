import React, { Component } from 'react'
import img from '../assets/test.jpg'
import { hot } from 'react-hot-loader'



export const Jumbotron = () => (
    <div className='photo'>
    <img src={img}></img>
    </div>
)