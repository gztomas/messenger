import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, List } from 'antd';
import { StyledListItem, StyledInfo } from './styled';

const ChannelsList = ({ channels }) => (
  <List
    split={false}
    itemLayout="horizontal"
    dataSource={channels}
    renderItem={({ picture, name, lastMessage, isActive }) => (
      <StyledListItem isActive={isActive}>
        <Avatar size="large" src={picture} />
        <StyledInfo>
          <h4 style={{ color: 'white' }}>{name}</h4>
          <span style={{ color: 'grey' }}>
            {lastMessage && lastMessage.body}
          </span>
        </StyledInfo>
      </StyledListItem>
    )}
  />
);

ChannelsList.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string,
      name: PropTypes.string,
      lastMessage: PropTypes.shape({}),
      isActive: PropTypes.bool,
    }),
  ).isRequired,
};

export default ChannelsList;
