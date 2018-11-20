import React from 'react';
import styled from 'styled-components';
import { List } from 'antd';

export const StyledInfo = styled.div`
  display: flex;
  line-height: 16px;
  flex-direction: column;
  margin-left: 10px;
`;

export const StyledListItem = styled(({ isSelected, children, ...rest }) => (
  <List.Item {...rest}>{children}</List.Item>
))`
  padding: 15px 10px;
  ${props => (props.isSelected ? 'border-left: 3px solid #3485f7;' : '')}
`;
