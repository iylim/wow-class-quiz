import React, {Component} from 'react';

class Question extends Component {
  render() {
    console.log(this.props.q);
    return (
      <div className="questions">
      <h1>{this.props.q.question}</h1>
        <div className="answerOptions">
        {this.props.q.answers.map(a => {
          return(
            <div className="answers">
              <button onClick={() => this.props.handleAnswer(a.type)}>{a.content}</button>
            </div>
          )}
          )}
          </div>
      </div>
  );
}
}

export default Question;
