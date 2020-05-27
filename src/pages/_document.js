import React from 'react';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * Default Next.js document override for supporting Styled Components
 * https://github.com/zeit/next.js/tree/canary/examples/with-styled-components
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      // @ts-ignore
      styles: [...initialProps.styles, ...sheet.getStyleElement()],
    };
  }
}
