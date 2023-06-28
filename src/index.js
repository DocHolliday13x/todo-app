import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import SettingsProvider from './Context/Settings';
import ModeProvider from './Context/Mode';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <ModeProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </ModeProvider>
    </MantineProvider>
  </React.StrictMode>
);


