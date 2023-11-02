import React from 'react';
import '../styles/globals.css';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import theme from '../theme/themeConfig';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ConfigProvider theme={theme}>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} />
      </AnimatePresence>
    </ConfigProvider>
  </Provider>
);

export default appWithTranslation(App);