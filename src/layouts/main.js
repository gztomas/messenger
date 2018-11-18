// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/head';
import 'antd/dist/antd.css';

const MainLayout = ({ children }) => (
  <div>
    <Head title="Messenger" description="Messenger Application POC" />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
