import React from 'react';
import PropTypes from 'prop-types';
import { Input, Card, Layout, Avatar, List } from 'antd';

import TypeSpinner from '../../components/type-spinner';

const { Header, Footer, Sider, Content } = Layout;

const Conversation = ({ contacts, selectedContact }) => {
  const conversation = [
    ...(selectedContact.messages || []),
    ...(selectedContact.typing
      ? [
          {
            inbox: true,
            body: <TypeSpinner />,
          },
        ]
      : []),
  ];
  return (
    <Layout hasSider style={{ height: '100vh' }}>
      <Sider
        style={{ background: '#262A2F', paddingTop: '10px' }}
        width="250"
        breakpoint="md"
        collapsedWidth="0"
      >
        <List
          split={false}
          itemLayout="horizontal"
          dataSource={contacts}
          renderItem={({ picture, name, messages }) => (
            <List.Item
              style={{
                padding: '15px 10px',
                ...(selectedContact.name === name && {
                  borderLeft: '3px solid #3485F7',
                }),
              }}
            >
              <Avatar size="large" src={picture} />
              <div
                style={{
                  display: 'flex',
                  lineHeight: '16px',
                  flexDirection: 'column',
                  marginLeft: '10px',
                }}
              >
                <h4 style={{ color: 'white' }}>{name}</h4>
                <span style={{ color: 'grey' }}>{messages[0].body}</span>
              </div>
            </List.Item>
          )}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: '#EAEDF2',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar size="large" src={selectedContact.picture} />
          <div
            style={{
              display: 'flex',
              lineHeight: '16px',
              flexDirection: 'column',
              marginLeft: '10px',
            }}
          >
            <h4>{selectedContact.name}</h4>
            <span>{selectedContact.status}</span>
          </div>
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
          <div style={{ flex: '1' }}>
            <List
              itemLayout="horizontal"
              dataSource={conversation}
              split={false}
              renderItem={message => (
                <List.Item>
                  <Card
                    style={{
                      ...(!message.inbox && {
                        marginLeft: 'auto',
                        background: '#3485F7',
                        color: 'white',
                      }),
                      borderRadius: '20px',
                    }}
                    bodyStyle={{ padding: '15px' }}
                  >
                    {message.body}
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </Content>
        <Footer>
          <Input
            placeholder="Type a message"
            autoFocus
            style={{ borderRadius: '20px', padding: '20px' }}
          />
        </Footer>
      </Layout>
    </Layout>
  );
};

Conversation.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedContact: PropTypes.shape({}).isRequired,
};

export default Conversation;
