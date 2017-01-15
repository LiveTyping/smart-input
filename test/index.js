// eslint-disable-next-line
import React from 'react'
// eslint-disable-next-line
import SmartInput from '../src/index.js'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

describe('<SmartInput />', () => {
  it('renders placeholder div', () => {
    const component = shallow(
      <SmartInput />
    )

    expect(component.find('div')).to.be.present()
  })
})
