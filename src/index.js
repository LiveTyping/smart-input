// eslint-disable-next-line
import React, { Component } from 'react'
import parser from './parser'

export default class SmartInput extends Component {
  constructor () {
    super()
    this.state = {
      message: '',
      expectations: new Set(),
      inputValue: '',
      caret: 0,
      activeExpectation: 0,
      focused: false
    }
  }

  componentDidMount () {
    window.addEventListener('mousedown', this.pageClick, false)
    this.input = document.querySelector('#smart-input')

    document.querySelector('#smart-input').addEventListener('keyup', () => {
      this.updateCaret()
    })
    document.querySelector('#smart-input').addEventListener('click', () => {
      this.updateCaret()
    })
  }

  pageClick (event) {
    if (event.target.getAttribute('data-expectation')) {
      event.preventDefault()
    }
  }

  updateCaret () {
    this.setState({caret: this.input.selectionStart})
    this.onChange()
  }

  onChange (event) {
    if (!event) {
      event = { target: { value: this.state.inputValue } }
    }
    let result = null
    try {
      result = parser.parse(event.target.value.split('').slice(0, this.state.caret).join(''))
    }
    catch (err) {
      result = err
    }
    let expectations = new Set(result.expected)
    let expectationsCopy = new Set(expectations)
    expectationsCopy.forEach((value) => {
      for (let key of Object.keys(this.props.suggestions)) {
        if (key === value.description || key === value.type) {
          for (let suggestion of this.props.suggestions[key]) {
            expectations.add({
              ignoreCase: false,
              text: suggestion,
              type: key
            })
          }
        }
      }
      if (!value.text) {
        expectations.delete(value)
      }
    })
    this.setState({ expectations: expectations, inputValue: event.target.value })
    if (result.message && event.target.value.length > 0) {
      this.setState({ message: result.message })
      return
    }
    this.setState({ message: '' })
  }

  onKeydown (event) {
    if (!this.props.applyKey) {
      this.props.applyKey = 'Tab'
    }
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        if (this.state.activeExpectation < this.state.expectations.size) {
          this.setState({ activeExpectation: this.state.activeExpectation + 1 })
        }
        break
      case 'ArrowUp':
        event.preventDefault()
        if (this.state.activeExpectation > 0) {
          this.setState({ activeExpectation: this.state.activeExpectation - 1 })
        }
        break
      case this.props.applyKey:
        event.preventDefault()
        if (this.state.expectations.size > 0) {
          this.expectationClick(null, [...this.state.expectations][this.state.activeExpectation].text)
          this.setState({ activeExpectation: 0 })
        }
        break
    }
  }
  expectationClick (event, text) {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    let inputTemp = this.state.inputValue.split('')
    inputTemp.splice(this.state.caret, 0, text)
    this.setState({ inputValue: inputTemp.join(''), caret: this.state.caret + text.length })
    setTimeout(() => {
      this.refs.input.focus()
      this.onChange()
    }, 0)
  }

  handleBlur (event) {
    this.setState({focused: false})
  }
  handleFocus (event) {
    this.setState({focused: true})
  }

  render () {
    return (
      <div className="smart-input">
        {this.props.errors &&
          <div className="message">
            {this.state.message}
          </div>
        }
        <input id="smart-input" className="input" placeholder={this.props.placeholder} type="text" onKeyDown={this.onKeydown.bind(this)} onChange={this.onChange.bind(this)} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} value={this.state.inputValue} ref="input" />
        {this.state.focused &&
          <div className="expectations">
            {(() => {
              let container = []
              let i = 0
              this.state.expectations.forEach((expectation) => {
                if (expectation.text) {
                  let classes = i === this.state.activeExpectation ? 'expectation active' : 'expectation'
                  container.push(<div data-expectation="true" className={classes} key={expectation.text} onClick={this.expectationClick.bind(this, event, expectation.text)}> {expectation.text} </div>)
                  i++
                }
              })
              return container
            })()}
          </div>
        }
      </div>
    )
  }
}
