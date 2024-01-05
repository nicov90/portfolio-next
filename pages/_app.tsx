import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { appWithTranslation } from 'next-i18next';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { mainTheme } from '@/theme/main-theme';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    {/* <ConfigProvider theme={theme}> */}
    <ThemeProvider theme={mainTheme}>
      <AnimatePresence mode='wait'>
        <CssBaseline />
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
    {/* </ConfigProvider> */}
  </Provider>
);

export default appWithTranslation(App);