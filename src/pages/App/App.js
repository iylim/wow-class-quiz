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
              value: 1,
              content: "Whoever, as long as they dont get in my way.",
            },
            {
              value: 0,
              content: "No one, I am indestructable.",
            },
            {
              value: 3,
              content: "A small group of my closest friends.",
            },
            {
              value: 2,
              content: "I'll get a pet to do all the work for me.",
            }
          ]
        },{
      question: "What would you do when you see a boar?",
      answers: [
        {
          value: 3,
          content: "Do Nothing, Cant Kill It Anyways.",
        },
        {
          value: 0,
          content: "Fight It!",
        },
        {
          value: 2,
          content: "Look At It From Far Away.",
        },
        {
          value: 1,
          content: "Sneak By Like A Ninja.",
        }
      ]
    }, {
      question: "You come across a wanted poster, how do you proceed?",
      answers: [
        {
          value: 0,
          content: "Hmm sure but it probably wont be easy.",
        },
        {
          value: 2,
          content: "I can probably use the reward money.",
        },
        {
          value: 1,
          content: "Easy Money!",
        },
        {
          value: 3,
          content: "Look for others who want to join the fight.",
        }
      ]
      }, {
        question: "What special ability would you have?",
        answers: [ 
          {
            value: 0,
            content: "Skin made of stone.",
          },
          {
            value: 3,
            content: "Lightning Speed.",
          },
          {
            value: 1,
            content: "Super Strength.",
          },
          {
            value: 2,
            content: "Wings.",
          }
        ]
      }, {
        question: "",
        answers: []
      }, {
        question: "",
        answers: []
      }, {
        question: "",
        answers: []
      }, {
        question: "",
        answers: []
      }, {
        question: "",
        answers: []
      }, {
        question: "",
        answers: []
      }
    ],
      totalValue: 0,
      selectedAnswers: []
    }
  }
  //total answer values 
  // handleAnswer = () => {
  //   this.setState({totalValue: this.state.totalValue + })
  // }

  handleSelectedAnswer = (e) => {
    this.state.selectedAnswers.push(e);
  }

  // scoreResults = () => {
  // DK 0-1
  // demon hunters 2-4
  // warrior 5-7 
  // pally 8-9
  // rogues 10-11
  // monk 12-13 
  // druid 14-16
  // shaman 17-19 
  // priest 20-22
  // lock 23-25 
  // mage 26-28
  // hunter 29-30
  // }

  render() {
    return (
      <div className="App">
       <header className="App-header">
        <h1>Which
          <img width="140"src="https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/thumb/3/37/Battle_for_Azeroth_logo.png/405px-Battle_for_Azeroth_logo.png?version=f26fa464015ed321a694dc05057d6ee5"/> 
          Class Should You Play?</h1>
      </header>
      {this.state.questions.map((q, idx) => {
        return(
          <Question key={idx} q={q} question={this.state.questions.question} answers={this.state.questions.answers}/>
        )
      })}
      </div>
    );
  }
}

export default App;
