import React from 'react';

import Key from './Key';

class Keyboard extends React.Component {
  mainKeys = [
    ["7", "8", "9"], 
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", ".", "-"],
  ]
  sideKeys =  ["CLEAR", "\u00F7", "\u00D7", "\u2212", "\u002B", "="];
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
        </table>
      </div>
    );
  } 
};

export default Keyboard;