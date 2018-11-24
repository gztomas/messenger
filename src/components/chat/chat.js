import React from 'react';
import { Layout } from 'antd';

import {
  StyledHeader,
  StyledFooter,
  StyledContent,
  StyledSider,
} from './styled';

import MessageBuilder from '../message-builder';
import ChannelsList from '../channels-list';
import ContactInfo from '../contact-info';
import MessagesList from '../messages-list';

const Chat = () => (
  <Layout hasSider>
    <StyledSider
      width="250"
      collapsedWidth={0}
      breakpoint="xxl"
      defaultCollapsed
    >
      <ChannelsList />
    </StyledSider>
    <Layout>
      <StyledHeader>
        <ContactInfo />
      </StyledHeader>
      <StyledContent>
        <MessagesList />
      </StyledContent>
      <StyledFooter>
        <MessageBuilder />
      </StyledFooter>
    </Layout>
  </Layout>
);

export default Chat;
