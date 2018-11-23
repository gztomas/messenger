import React from 'react';
import { Layout } from 'antd';

import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import MessageBuilder from '../components/message-builder';
import ChannelsList from '../components/channels-list';
import ContactInfo from '../components/contact-info';
import MessagesList from '../components/messages-list';
import { listenForMessages, listenForChannel } from '../actions';

const { Header, Footer, Sider, Content } = Layout;

const Chat = () => (
  <Layout hasSider>
    <Sider
      style={{ background: '#262A2F', paddingTop: '10px' }}
      width="250"
      breakpoint="md"
      collapsedWidth="0"
    >
      <ChannelsList />
    </Sider>
    <Layout>
      <Header
        style={{
          background: '#EAEDF2',
          display: 'flex',
        }}
      >
        <ContactInfo />
      </Header>
      <Content
        style={{
          padding: '0 50px',
          overflow: 'scroll',
          background: 'linear-gradient(to right, #F4F8FA , #E4E8EA)',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <MessagesList />
      </Content>
      <Footer>
        <MessageBuilder />
      </Footer>
    </Layout>
  </Layout>
);

const mapDispatchToProps = {
  listenForMessages: () => (dispatch, getState) =>
    dispatch(listenForMessages(getState().activeChannelId)),
  listenForChannel: () => (dispatch, getState) =>
    dispatch(listenForChannel(getState().activeChannelId)),
};

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.listenForMessages();
      this.props.listenForChannel();
    },
  }),
)(Chat);
