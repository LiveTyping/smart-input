import React, { Component } from 'react';
import parser from './parser';

export default class SmartInput extends Component {
  constructor() {
    super();
    this.state = {
      message: 'valid',
      expectations: new Set(),
      inputValue: ''
    };
  }
  onChange(event) {
    if (!event) {
      event = {target: {value:  this.state.inputValue}}
    }
    var result = parser.parse(event.target.value);
    var expectations = new Set(result.expected);
    this.setState({expectations: expectations, inputValue: event.target.value});
    if (result.message && event.target.value.length > 0){
      this.setState({message: result.message});
      return;
    }
    this.setState({message: 'valid'});
  }

  expectationClick(text) { 
    this.setState({inputValue: this.state.inputValue + text});
    setTimeout(() => {
      this.onChange(); 
      this.refs.input.focus();}, 
    0);
  }



  render() {
    return (
      <div style={styles.smartInput}>
        <div style={styles.message}>
          {this.state.message}
        </div>
        <input style={styles.input} type="text" onChange={this.onChange.bind(this)} value={this.state.inputValue} ref="input" />
        <div style={styles.expectations}>
          {(()=>{
            var container = [];
            this.state.expectations.forEach((expectation, i) => {
              if (expectation.text) {
                container.push(<div style={styles.expectation} key={expectation.text} onClick={this.expectationClick.bind(this, expectation.text)}> {expectation.text} </div>)
              }
            })
            return container;
          })()}
        </div>

      </div>
    );
  }
}

const styles = {
  smartInput: {
    position: 'relative'
  },
  input: {
    width: '100%'
  },
  expectations: {
    position: 'absolute',
    top: '100%',
    border: '1px solid #ccc',
    borderTop: 'none'
  },
  expectation: {
    padding: '5px 10px',
    cursor: 'pointer'
  },
  message: {
    fontSize: '0.9em'
  }
};