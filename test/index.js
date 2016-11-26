import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import SmartInput from '../src/index';

chai.use(chaiEnzyme());

describe('<SmartInput />', () => {
  it('renders placeholder div', () => {
    const component = shallow(
      <SmartInput />
    );

    expect(component.find('div')).to.be.present();
  });
});
