import React, {Component} from 'react';

class Question extends Component {
  
  render() {
    return (
      <div className="questions">
      <h1>{this.props.q.question}</h1>
        <div className="answerOptions">
        {this.props.q.answers.map((a, idx) => {
          return(
            <div key={idx} className="answers">
              <button onClick={() => this.props.handleSelectedAnswer(a)}>{a.content}</button>
            </div>
          )}
          )}
          </div>
      </div>
  );
}
}

export default Question;
