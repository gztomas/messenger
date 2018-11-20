import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { StyledInput } from './styled';

const MessageBuilder = ({ onSendMessage }) => {
  const onKeyDown = ev => {
    if (ev.key === 'Enter' && ev.target.value) {
      onSendMessage(ev.target.value);
      // eslint-disable-next-line no-param-reassign
      ev.target.value = '';
      ev.preventDefault();
    }
  };

  return (
    <StyledInput
      as={Input}
      placeholder="Type a message"
      autoFocus
      onKeyDown={onKeyDown}
    />
  );
};

MessageBuilder.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default MessageBuilder;
