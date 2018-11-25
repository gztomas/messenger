import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { debounce } from 'lodash';
import { StyledInput } from './styled';

const TYPING_DEBOUNCE_TIME = 2000;
const MESSAGE_INPUT_PLACEHOLDER = 'Type a message';
const ENTER_KEY_CODE = 13;

class MessageBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: '', isTyping: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEndTyping = this.handleEndTyping.bind(this);

    this.debouncedOnEndTyping = debounce(
      this.handleEndTyping,
      TYPING_DEBOUNCE_TIME,
    );
  }

  handleEndTyping() {
    const { onEndTyping } = this.props;
    this.setState({ isTyping: false });
    onEndTyping();
  }

  handleChange(event) {
    const { onStartTyping } = this.props;
    const { message, isTyping } = this.state;
    const newMessage = event.target.value;

    if (newMessage.trim().length || message) {
      this.setState({ message: newMessage });
      if (!isTyping && newMessage) {
        this.setState({ isTyping: true });
        onStartTyping();
      }
      this.debouncedOnEndTyping();
    }
  }

  handleKeyPress(event) {
    const { onSendMessage } = this.props;
    const { message } = this.state;

    if (event.which === ENTER_KEY_CODE && !event.shiftKey) {
      if (message) {
        this.handleEndTyping();
        onSendMessage(message.trim());
        this.setState({ message: '' });
      }
      event.preventDefault();
    }
  }

  render() {
    const { message } = this.state;

    return (
      <StyledInput
        as={Input.TextArea}
        type="submit"
        placeholder={MESSAGE_INPUT_PLACEHOLDER}
        rows={1}
        autosize={{ minRows: 1, maxRows: 5 }}
        autoFocus
        value={message}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

MessageBuilder.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
  onStartTyping: PropTypes.func.isRequired,
  onEndTyping: PropTypes.func.isRequired,
};

export default MessageBuilder;
