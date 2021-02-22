import React, { Component } from 'react'
import questions from './questions.json'
import ResultComponent from './ResultComponent'
import Countdown from 'react-countdown';
import axios from 'axios'
export default class QuizComponent extends Component {
    constructor() {
        super()
        this.state = {
            step: 0,
            score: 0,
            ques: [...questions],
        }
    }
    nextHandler = () => {
        this.setState({
            step: this.state.step + 1
        })
    }
    prevHandler = () => {
        this.setState({
            step: this.state.step - 1
        })
    }
    checkoption = (e) => {
        e.preventDefault()
        const ans = e.target.value;
        const crctans = this.state.ques[this.state.step].answer
        { console.log(ans) }
        var result = ans.localeCompare(crctans);
        {
            result === 0 && alert("right ans") && this.setState({
                score: this.state.score + 1,
            })
        }
        { ans != crctans && alert("wrong ans") }
    }
    componentDidMount() {
        axios.get("https://my-json-server.typicode.com/Naveen132895/quiz-api/questions")
            .then(res => {
                console.log("entered to didmount")
                this.setState({
                    ques: res.data
                })
            }).catch(console.error("error"))
    }
    render() {
        const isLoggedIn = this.state.step;
        var questiontobedisplayed = this.state.ques[this.state.step];
        return (

            <div className="main-container">
                {isLoggedIn < 15 &&
                    <div className="quiz-container">
                        <h1>Question</h1>
                        <div className="question-container">
                            <h4>{this.state.step + 1} of 15</h4><br />
                            <h3>{questiontobedisplayed.question}</h3>
                        </div>
                        <h4> <Countdown date={Date.now() + 10000} /></h4>
                        <div className="options">
                            <button onClick={this.checkoption} value={questiontobedisplayed.optionA}>{questiontobedisplayed.optionA}</button>
                            <button onClick={this.checkoption} value={questiontobedisplayed.optionB}>{questiontobedisplayed.optionB}</button>
                            <button onClick={this.checkoption} value={questiontobedisplayed.optionC}>{questiontobedisplayed.optionC}</button>
                            <button onClick={this.checkoption} value={questiontobedisplayed.optionD}>{questiontobedisplayed.optionD}</button>
                        </div>
                        <div className="buttons">
                            <button onClick={this.prevHandler}>Previous</button>
                            <button onClick={this.nextHandler}>Next</button>
                            <button>Quit</button>
                        </div>
                    </div>}
                {isLoggedIn >= 15 && alert("quiz has ended") &&
                    <ResultComponent score={this.state.score} />
                }
            </div>
        )
    }
}