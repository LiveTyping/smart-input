import React, { Component } from 'react';
import SmartInput from '../src/index.jsx';

export default class Example extends Component {
  render() {
    return (
      <div>
        <h1>SmartInput</h1>
        <SmartInput applyKey="Tab" suggestions={{ identifier: ['id', 'name', 'age'] }} placeholder="SQL-like query" errors={true}/>
      </div>
    );
  }
}
