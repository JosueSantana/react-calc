import React from 'react';
import {Parser} from 'expr-eval';

import Keyboard from './Keyboard';
import Display from './Display';

class ReactCalcApp extends React.Component {
  state= {
    displayExpression: [],
    result: undefined,
    error: undefined
  };

  handleNumericKeyPress = (inputKey) => {
    this.setState((prevState) => {
        if(!prevState.displayExpression){
          return {
            displayExpression: [inputKey]
          }
        }

        if(prevState.result){
          return {
            displayExpression: [prevState.result].concat([inputKey]),
            result: undefined
          }
        }

        if(prevState.displayExpression.length === 50){
          return prevState;
        }

        return  {
          displayExpression: prevState.displayExpression.concat([inputKey]),
          result: undefined
        };
      }
    );
  };

  handleClearPress = () => {
    this.setState((prevState) => {
      if(prevState.error){
        return {
          error: undefined
        }
      }
      return {
        displayExpression: [],
        result: undefined
      }
    });
  }
  handleEnterPress = () => {
    this.setState((prevState) => {
      if(prevState.result){
        return prevState;
      }
      try {
        const modifiedOperators = prevState.displayExpression.map((token) => {
          if(token === "\u00F7") { return "/" }
          else if(token === "\u00D7") { return "*" }
          else if(token === "\u2212" ) { return "-" }
          else if(token === "\u002B") { return "+"}
          else {return token};
        });
        const parsedValue = Parser.parse(modifiedOperators.join("")).evaluate();
        
        if(parsedValue === Infinity){
          return{
            error: "DIVIDE BY 0 ERROR"
          }
        }
        return {
          result: parsedValue
        }
      } catch (e) {
        return {
          error: "SYNTAX ERROR"
        }
      }
    });
  }

  render(){
    return (
      <div className="container">
        <div className="container__shape">
          <Display 
            displayExpression={this.state.displayExpression}
            result={this.state.result}
            error={this.state.error}
          />
          <Keyboard 
            handleNumericKeyPress={this.handleNumericKeyPress}
            handleClearPress={this.handleClearPress}
            handleEnterPress={this.handleEnterPress}
          />
        </div>
      </div>
    );
  }
}

export default ReactCalcApp;