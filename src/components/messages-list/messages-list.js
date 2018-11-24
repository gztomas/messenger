import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { StyledContainer, Message, MessageContent, OwnMessage } from './styled';

import TypeSpinner from '../type-spinner';

const MESSAGE_BEING_TYPED = {
  body: <TypeSpinner />,
};

const MessagesList = ({ messages, isTyping, myself }) => {
  const allMessages = [...messages];
  if (isTyping) {
    allMessages.push(MESSAGE_BEING_TYPED);
  }

  return (
    <StyledContainer>
      <List
        itemLayout="horizontal"
        dataSource={allMessages}
        split={false}
        locale={{
          emptyText: '',
        }}
        renderItem={message => (
          <List.Item>
            {message.from === myself ? (
              <OwnMessage>
                <MessageContent>{message.body}</MessageContent>
              </OwnMessage>
            ) : (
              <Message>
                <MessageContent>{message.body}</MessageContent>
              </Message>
            )}
          </List.Item>
        )}
      />
    </StyledContainer>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isTyping: PropTypes.bool.isRequired,
  myself: PropTypes.string.isRequired,
};

export default MessagesList;
