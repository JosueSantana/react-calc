import React from 'react';

class Key extends React.Component {
  
  render() {
    return  <td>
              <button onClick={(e) => {this.props.handleNumericKeyPress(this.props.keyValue)}}>
                {this.props.keyValue}
              </button>
            </td>;
  } 
}

export default Key;