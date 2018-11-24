import React from 'react';
import PropTypes from 'prop-types';
import { List, Card } from 'antd';
import { StyledContainer } from './styled';

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
            <Card
              style={{
                ...(message.from === myself && {
                  marginLeft: 'auto',
                  background: '#3485F7',
                  color: 'white',
                }),
                borderRadius: '20px',
              }}
              bodyStyle={{ padding: '15px' }}
            >
              {message.body}
            </Card>
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
