import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'antd';
import { StyledInfo, StyledContainer } from './styled';

const ContactInfo = ({ picture, name, status }) => (
  <StyledContainer>
    <Avatar size="large" src={picture} />
    <StyledInfo>
      <h4>{name}</h4>
      <span>{status}</span>
    </StyledInfo>
  </StyledContainer>
);

ContactInfo.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default ContactInfo;
