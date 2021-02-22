import React, { Component } from 'react';
import QuizComponent from './QuizComponent.jsx'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
class HomeComponent extends Component {
    render() {
        return (
            <div className="home-container">
                <h1>Quiz App</h1>
                <button><Link to="/play/quiz" >Play</Link></button> 
            </div>
        );
    }
}

export default HomeComponent;