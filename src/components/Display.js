import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div className="display-pane">
        {(
          this.props.error ? 
            <p>{this.props.error}</p> : 
            <div>
              <p>
                {this.props.displayExpression.join("")}
              </p>
              <p>
                {!isNaN(this.props.result) && this.props.result}
              </p>
            </div>
          )} 
      </div>
    );
  }
}

export default Display;