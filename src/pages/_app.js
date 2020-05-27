import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../with-redux-store';
import 'antd/dist/antd.css';

/**
 * Default Next.js App override for supporting Redux
 * https://github.com/zeit/next.js/tree/canary/examples/with-redux
 */
class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
