import React from 'react';
import { isUndefined } from 'util';


class Display extends React.Component {
  render() {
    return (
      <div className="display-pane">
        <div>
          {this.props.displayExpression.join("")}
        </div>
        <p>
          {!isNaN(this.props.result) && this.props.result}
        </p>
      </div>
    );
  }
}

export default Display;