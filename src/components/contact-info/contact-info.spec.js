import React from 'react';
import { shallow } from 'enzyme';
import ContactInfo from './contact-info';

describe('ContactInfo', () => {
  let props;

  beforeEach(() => {
    props = {
      picture: 'http://cdn.com/picture.jpg',
      name: 'Victor',
      status: 'online',
      isTyping: false,
    };
  });

  it('should render properly', () => {
    const wrapper = shallow(<ContactInfo {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show the name', () => {
    const wrapper = shallow(<ContactInfo {...props} />);
    const title = wrapper.find('h4');
    expect(title.text()).toBe('Victor');
  });

  it('should show the status', () => {
    const wrapper = shallow(<ContactInfo {...props} />);
    const details = wrapper.find('span');
    expect(details.text()).toBe('online');
  });

  it('should show when typing', () => {
    props.isTyping = true;
    const wrapper = shallow(<ContactInfo {...props} />);
    const details = wrapper.find('span');
    expect(details.text()).toBe('typing...');
  });
});
