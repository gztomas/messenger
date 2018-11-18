import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
// @ts-ignore
import Logo from '../static/logo.svg';

const { Meta } = Card;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const StyledLogo = styled(Logo)`
  padding: 20px;
`;

export default () => (
  <Container>
    <Card hoverable style={{ width: 240 }} cover={<StyledLogo />}>
      <Meta title="Messenger App" description="This is just the boilerplate" />
    </Card>
  </Container>
);
