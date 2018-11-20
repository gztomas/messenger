import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, List } from 'antd';
import { StyledListItem, StyledInfo } from './styled';

const ContactsList = ({ contacts }) => (
  <List
    split={false}
    itemLayout="horizontal"
    dataSource={contacts}
    renderItem={({ picture, name, lastMessage, isSelected }) => (
      <StyledListItem isSelected={isSelected}>
        <Avatar size="large" src={picture} />
        <StyledInfo>
          <h4 style={{ color: 'white' }}>{name}</h4>
          <span style={{ color: 'grey' }}>{lastMessage.body}</span>
        </StyledInfo>
      </StyledListItem>
    )}
  />
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string,
      name: PropTypes.string,
      lastMessage: PropTypes.shape({}),
      isSelected: PropTypes.bool,
    }),
  ).isRequired,
};

export default ContactsList;
