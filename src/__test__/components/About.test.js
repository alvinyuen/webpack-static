import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About.js';
import toJson from 'enzyme-to-json';


test ('About component should render', () => {
  const component = shallow(<About />);
  expect(component.contains('Hi, I\'m Alvin')).toBe(true);
})