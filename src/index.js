import React from 'react';
import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import { theme } from 'utils/theme';

import { store } from 'redux/store';

import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {' '}
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>{' '}
    </BrowserRouter>
  </React.StrictMode>
);
