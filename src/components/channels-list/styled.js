import React from 'react';
import styled from 'styled-components';
import { List } from 'antd';

export const StyledPicture = styled.div`
  flex: 0 0 auto;
`;

export const OneLiner = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledDetails = styled.div`
  display: flex;
  line-height: 16px;
  flex-direction: column;
  margin-left: 10px;
  overflow: hidden;
`;

export const StyledListItem = styled(({ isActive, children, ...rest }) => (
  <List.Item {...rest}>{children}</List.Item>
))`
  padding: 15px 10px;
  ${props => (props.isActive ? 'border-left: 3px solid #3485f7;' : '')}

  .ant-list-item-content {
    overflow: hidden;
  }
`;
