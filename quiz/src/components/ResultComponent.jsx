import React, { Component } from 'react'
import HomeComponent from './HomeComponent.jsx'
import QuizComponent from './QuizComponent.jsx'
export default class ResultComponent extends Component {
    render() {
        return (
            <div className="result-main-container">
                <i className="far fa-check-circle" aria-hidden="true"></i>
                <h1>Result</h1>
                <div className="result-container">
                    <h2>You need more practice!</h2>
                    <h1>Your Score: {this.props.score*100/15}</h1>
                    <p>Total number of questions: <span>15</span></p>
                    <p>Number of attempted questions: <span>15</span></p>
                    <p>Number of Correct Answers: <span>{this.props.score}</span></p>
                    <p>Number of Wrong Answers: <span>{15-this.props.score}</span></p>
                </div>
                <div className="button-container">
                    <button onClick={<QuizComponent/>}>Play Again</button>
                    <button onClick={<HomeComponent/>}>Back to Home</button>
                </div>

            </div>
        )
    }
}