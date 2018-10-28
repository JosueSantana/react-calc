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
      <div className="keyboard">
        <div className="keyboard__main">
          {this.mainKeys.map((keyRow) => {
            return (
              <div className="keyboard__main__row">
               {keyRow.map((key) => {
                 return (
                   <Key 
                      keyValue={key}
                      handleNumericKeyPress={this.props.handleNumericKeyPress}
                    />
                  );
               })}
              </div>
            );
          })}
        </div>
        <div className="keyboard__side">
          <button onClick={this.props.handleClearPress}>
            CLEAR
          </button>
          {this.sideKeys.map((key) => {
            return (
                  <Key 
                    keyValue={key}
                    handleNumericKeyPress={this.props.handleNumericKeyPress}
                  />
              );
          })}
            <button onClick={this.props.handleEnterPress}>
              =
            </button>
        </div>
      </div>
    );
  } 
};

export default Keyboard;