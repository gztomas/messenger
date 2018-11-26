import React from 'react';
import MainLayout from '../layouts/main';
import Chat from '../components/chat';

/**
 * This would be the main page for a real world use case
 */
const Standalone = () => (
  <MainLayout>
    <Chat />
  </MainLayout>
);

export default Standalone;
