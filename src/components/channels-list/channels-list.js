import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, List } from 'antd';
import {
  StyledListItem,
  StyledDetails,
  StyledPicture,
  OneLiner,
} from './styled';

const ChannelsList = ({ channels }) => (
  <List
    split={false}
    itemLayout="horizontal"
    dataSource={channels}
    renderItem={({ picture, name, lastMessage, isActive }) => (
      <StyledListItem isActive={isActive}>
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
};

export default ChannelsList;
