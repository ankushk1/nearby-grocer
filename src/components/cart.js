import React, { Component } from 'react'
import Navbar from './navbar'
import '../index.css';


export default class cart extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                
                <p>No products</p>
            </div>
        )
    }
}
