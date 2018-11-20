// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from '../components/head';
import 'antd/dist/antd.css';

const FullHeight = styled.div`
  display: flex;
  height: 100vh;
`;

const MainLayout = ({ children }) => (
  <div>
    <Head title="Messenger" description="Messenger Application POC" />
    <FullHeight>{children}</FullHeight>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
