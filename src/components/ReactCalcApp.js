import React from 'react';
import {Parser} from 'expr-eval';

import Keyboard from './Keyboard';
import Display from './Display';

class ReactCalcApp extends React.Component {
  state= {
    displayExpression: [],
    result: undefined
  };

  handleNumericKeyPress = (inputKey) => {
    this.setState((prevState) => {
        if (inputKey === "CLEAR") {
          return {
            displayExpression: [],
            result: undefined
          }
        } else if (inputKey === "="){
          try {
            const modifiedOperators = prevState.displayExpression.map((token) => {
              if(token === "\u00F7") { return "/" }
              else if(token === "\u00D7") { return "*" }
              else if(token === "\u2212" ) { return "-" }
              else if(token === "\u002B") { return "+"}
              else {return token};
            });
            const parsedValue = Parser.parse(modifiedOperators.join("")).evaluate();

            return {
              displayExpression: [],
              result: parsedValue
            }
          } catch (e) {
            return {
              result: undefined 
            }
          }
        }

        if(!prevState.displayExpression){
          return {
            displayExpression: [inputKey]
          }
        }

        return  {
          displayExpression: prevState.displayExpression.concat([inputKey]),
          result: undefined
        };
      }
    );
  };

  render(){
    return (
      <div className="container">
        <Display 
          displayExpression={this.state.displayExpression}
          result={this.state.result}
        />
        <Keyboard 
          handleNumericKeyPress={this.handleNumericKeyPress}
          prop1={5}
        />
      </div>
    );
  }
}

export default ReactCalcApp;