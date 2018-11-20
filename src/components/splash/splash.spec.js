import React from 'react';
import { shallow } from 'enzyme';

import Splash from './splash';

describe('Splash', () => {
  const props = {};

  it('should render properly', () => {
    const wrapper = shallow(<Splash {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
