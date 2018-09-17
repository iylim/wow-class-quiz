import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Question from '../../components/Question/Question';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
      {question: "What would you do when you see a wild animal?",
      answers: [
        {
          type: "tank",
          content: "Fight it",
        },
        {
          type: "melee",
          content: "Sneak past it",
        },
        {
          type: "ranged",
          content: "look at it from far away",
        },
        {
          type: "healer",
          content: "do nothing, cant kill it anyways",
        }
      ]
    }
    ],
      results: []
    }
  }

  handleAnswer = (e) => {
    var results = this.state.results.push(e);
    this.setState({results: results})
  }

  render() {
    return (
      <div className="App">
       <header className="App-header">
        <h1>Which <br /> 
          World of Warcraft <br/>
          Class Should You Play?</h1>
      </header>
      {this.state.questions.map(q => {
        return(
          <Question q={q} question={this.state.questions.question} answers={this.state.questions.answers}/>
        )
      })}
      </div>
    );
  }
}

export default App;
