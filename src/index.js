import React, { Component } from 'react';
import parser from './parser';

export default class SmartInput extends Component {
  constructor() {
    super();
    this.state = {
      message: 'valid',
      expectations: new Set(),
      inputValue: '',
      activeExpectation: 0
    };
  }
  onChange(event) {
    if (!event) {
      event = {target: {value:  this.state.inputValue}}
    }
    var result = null;
    try {
       result = parser.parse(event.target.value);
    } catch (err) {
       result = err;
    }
    var expectations = new Set(result.expected);
    this.setState({expectations: expectations, inputValue: event.target.value});
    if (result.message && event.target.value.length > 0){
      this.setState({message: result.message});
      return;
    }
    this.setState({message: 'valid'});
  }

  onKeydown(event) {
    console.log(event.key)
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.state.activeExpectation < this.state.expectations.size) {
          this.setState({activeExpectation: this.state.activeExpectation + 1});
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (this.state.activeExpectation > 0) {
          this.setState({activeExpectation: this.state.activeExpectation - 1});
        }
        break;
      case 'Tab':
        event.preventDefault();
        if (this.state.expectations.size > 0) {
          this.expectationClick([...this.state.expectations][this.state.activeExpectation].text);
          this.setState({activeExpectation: 0});
        }
        break;
    }
  }

  expectationClick(text) { 
    this.setState({inputValue: this.state.inputValue + text});
    setTimeout(() => {
      this.onChange(); 
      this.refs.input.focus();
    }, 0);
  }

  render() {
    return (
      <div className="smart-input">
        <div className="message">
          {this.state.message}
        </div>
        <input className="input" type="text" onKeyDown={this.onKeydown.bind(this)} onChange={this.onChange.bind(this)} value={this.state.inputValue} ref="input" />
        <div className="expectations">
          {(()=>{
            var container = [];
            var i = 0;
            this.state.expectations.forEach((expectation) => {
              if (expectation.text) {
                var classes = i === this.state.activeExpectation ? 'expectation active' : 'expectation';
                container.push(<div className={classes} key={expectation.text} onClick={this.expectationClick.bind(this, expectation.text)}> {expectation.text} </div>)
                i++;
              }
            })
            return container;
          })()}
        </div>

      </div>
    );
  }
}