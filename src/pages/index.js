import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import initializeStore from '../store';
import MainLayout from '../layouts/main';
import Chat from '../layouts/chat';
import { LAURA_INITIAL_STATE, ROB_INITIAL_STATE } from '../initial-state';

const leftStore = initializeStore(LAURA_INITIAL_STATE);
const rightStore = initializeStore(ROB_INITIAL_STATE);

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
