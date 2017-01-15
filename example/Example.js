// eslint-disable-next-line
import React, { Component } from 'react'
// eslint-disable-next-line
import SmartInput from '../src/index.js'

export default class Example extends Component {
  render () {
    return (
      <div>
        <h1>ReactSmartInput</h1>
        <SmartInput applyKey="Tab" suggestions={{ identifier: ['start_date', 'end_date', 'created', 'timestamp'] }} placeholder="SQL-like query" errors={true} />
      </div>
    )
  }
}
