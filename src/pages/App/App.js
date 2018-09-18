import React, { Component } from 'react';
import Question from '../../components/Question/Question';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          question: "Who would you bring with you to Azeroth?",
          answers: [
            {
              type: "T",
              content: "No one, I am indestructable.",
            },
            {
              type: "M",
              content: "Whoever, as long as they dont get in my way.",
            },
            {
              type: "R",
              content: "I'll get a pet to do all the work for me.",
            },
            {
              type: "H",
              content: "A small group of my closest friends.",
            }
          ]
        },{
      question: "What would you do when you see a boar?",
      answers: [
        {
          type: "T",
          content: "Fight It!",
        },
        {
          type: "M",
          content: "Sneak By Like A Ninja.",
        },
        {
          type: "R",
          content: "Look At It From Far Away.",
        },
        {
          type: "H",
          content: "Do Nothing, Cant Kill It Anyways.",
        }
      ]
    }, {
      question: "You come across a wanted poster, how do you proceed?",
      answers: [
        {
          type: "T",
          content: "Hmm sure but it probably wont be easy.",
        },
        {
          type: "M",
          content: "Easy Money!",
        },
        {
          type: "R",
          content: "I can probably use the reward money.",
        },
        {
          type: "H",
          content: "Look for others who want to join the fight.",
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
