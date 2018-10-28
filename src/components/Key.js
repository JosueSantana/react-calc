import React from 'react';

class Key extends React.Component {
  
  render() {
    return <button onClick={(e) => {this.props.handleNumericKeyPress(this.props.keyValue)}}>
              {this.props.keyValue}
            </button>
  } 
}

export default Key;