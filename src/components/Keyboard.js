import React from 'react';

import Key from './Key';

class Keyboard extends React.Component {
  mainKeys = [
    ["7", "8", "9"], 
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", ".", "-"],
  ]
  sideKeys =  ["\u00F7", "\u00D7", "\u2212", "\u002B"];
  render() {
    return (
      <div>
        <table className="main-keyboard">
          {this.mainKeys.map((keyRow) => {
            return (
              <tr>
               {keyRow.map((key) => {
                 return (
                   <Key 
                      keyValue={key}
                      handleNumericKeyPress={this.props.handleNumericKeyPress}
                    />
                  );
               })}
              </tr>
            );
          })}
        </table>
        <table className="side-keyboard">
          <tr>
            <td>
              <button onClick={this.props.handleClearPress}>
                CLEAR
              </button>
            </td>
          </tr>
          {this.sideKeys.map((key) => {
            return (
                <tr>
                  <Key 
                    keyValue={key}
                    handleNumericKeyPress={this.props.handleNumericKeyPress}
                  />
                </tr>
              );
          })}
          <tr>
            <td>
              <button onClick={this.props.handleEnterPress}>
                =
              </button>
            </td>          
          </tr>
        </table>
      </div>
    );
  } 
};

export default Keyboard;