import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import initializeStore from '../store';
import MainLayout from '../layouts/main';
import Chat from '../components/chat';
import { fetchInitialState } from '../actions';

// For demo purposes, the app has two stores, one for Laura, and other for Rob
// For a real world use case, there will be a single store
const leftStore = initializeStore(fetchInitialState('laura-id'), 'Laura Store');
const rightStore = initializeStore(fetchInitialState('rob-id'), 'Rob Store');

const Screen = styled.div`
  margin: 10px;
  display: flex;
  flex: 1;
  box-shadow: 8px 8px 5px -5px #bbb;
`;

const DemoPage = () => (
  <MainLayout>
    <Provider store={leftStore}>
      <Screen>
        <Chat />
      </Screen>
    </Provider>
    <Provider store={rightStore}>
      <Screen>
        <Chat />
      </Screen>
    </Provider>
  </MainLayout>
);

export default DemoPage;
