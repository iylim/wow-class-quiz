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
          content: "Fight It!",
        },
        {
          type: "melee",
          content: "Sneak By Like A Ninja.",
        },
        {
          type: "ranged",
          content: "Look At It From Far Away.",
        },
        {
          type: "healer",
          content: "Do Nothing, Cant Kill It Anyways.",
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

  handleNext = () => {

  }

  render() {
    return (
      <div className="App">
       <header className="App-header">
        <h1>Which
          <img width="140"src="https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/thumb/3/37/Battle_for_Azeroth_logo.png/405px-Battle_for_Azeroth_logo.png?version=f26fa464015ed321a694dc05057d6ee5"/> 
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
