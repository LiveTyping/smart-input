// eslint-disable-next-line
import React, { Component } from 'react'
// eslint-disable-next-line
import SmartInput from '../src/index.js'

export default class Example extends Component {
  render () {
    return (
      <div>
        <h1>SmartInput</h1>
        <SmartInput applyKey="Tab" suggestions={{ identifier: ['id', 'name', 'age'] }} placeholder="SQL-like query" errors={true}/>
      </div>
    )
  }
}
