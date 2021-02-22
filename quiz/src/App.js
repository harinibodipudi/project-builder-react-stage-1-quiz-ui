import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Route exact path="/" component={HomeComponent}/>
      <Route path="/play/quiz" exact component={QuizComponent}/>
      <Route path="/play/quizresult" exact component={ResultComponent}/>
    </Router>
  );
}
 export default App;