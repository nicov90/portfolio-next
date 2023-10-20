import React from 'react';
import '../styles/globals.css';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import theme from '../theme/themeConfig';
import { AnimatePresence } from 'framer-motion';

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <AnimatePresence >
      <Component {...pageProps} />
    </AnimatePresence>
  </ConfigProvider>
);

export default App;