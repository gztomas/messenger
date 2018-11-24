import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'antd';
import { StyledDetails, StyledContainer } from './styled';

const IS_TYPING_LABEL = 'typing...';

const ContactInfo = ({ picture, name, status, isTyping }) => (
  <StyledContainer>
    <Avatar size="large" src={picture} />
    <StyledDetails>
      <h4>{name}</h4>
      <span>{isTyping ? IS_TYPING_LABEL : status}</span>
    </StyledDetails>
  </StyledContainer>
);

ContactInfo.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isTyping: PropTypes.bool.isRequired,
};

export default ContactInfo;
