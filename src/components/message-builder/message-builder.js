import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { debounce } from 'lodash';
import { StyledInput } from './styled';

class MessageBuilder extends React.Component {
  componentDidMount() {
    const { onEndTyping } = this.props;
    this.debouncedOnEndTyping = debounce(onEndTyping, 2000);
  }

  render() {
    const { onSendMessage, onStartTyping, onEndTyping, isTyping } = this.props;
    const onKeyDown = ev => {
      if (!isTyping && ev.target.value) {
        onStartTyping();
      }
      this.debouncedOnEndTyping();
      if (ev.key === 'Enter' && ev.target.value) {
        onEndTyping();
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
  }
}

MessageBuilder.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
  onStartTyping: PropTypes.func.isRequired,
  onEndTyping: PropTypes.func.isRequired,
  isTyping: PropTypes.bool.isRequired,
};

export default MessageBuilder;
