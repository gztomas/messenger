import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, List } from 'antd';
import {
  StyledListItem,
  StyledDetails,
  StyledPicture,
  OneLiner,
} from './styled';

const ChannelsList = ({ channels, onSetActiveChannel }) => (
  <List
    split={false}
    itemLayout="horizontal"
    dataSource={channels}
    renderItem={({ id, picture, name, lastMessage, isActive }) => (
      <StyledListItem
        isActive={isActive}
        onClick={() => onSetActiveChannel(id)}
      >
        <StyledPicture as={Avatar} size="large" src={picture} />
        <StyledDetails>
          <h4 style={{ color: 'white' }}>{name}</h4>
          <OneLiner style={{ color: 'grey' }}>
            {lastMessage && lastMessage.body}
          </OneLiner>
        </StyledDetails>
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
  onSetActiveChannel: PropTypes.func.isRequired,
};

export default ChannelsList;
