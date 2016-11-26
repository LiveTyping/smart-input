import React, { Component } from 'react';
import parser from './parser';

export default class SmartInput extends Component {
  constructor() {
    super();
    this.state = {
      message: 'valid'
    };
  }
  componentDidMount() {
    console.log(parser.parse('ID=1 AND NAME=\'Dmitry\''));
  }

  onChange(event) {
    var result = parser.parse(event.target.value);
    if (result.message && event.target.value.length > 0){
      this.setState({message: result.message});
      return;
    }
    this.setState({message: 'valid'});
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange.bind(this)}/>
        <div>
          <code>{this.state.message}</code>
        </div>
      </div>
    );
  }
}
