import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div className="display-pane">
        {(
          this.props.error ? 
            <div className="display-pane__error">{this.props.error}</div> : 
            <div className="display-pane__valid">
              <div className="display-pane__expr">
                {this.props.displayExpression.join("")}
              </div>
              <div className="display-pane__result">
                {!isNaN(this.props.result) && this.props.result}
              </div>
            </div>
          )} 
      </div>
    );
  }
}

export default Display;