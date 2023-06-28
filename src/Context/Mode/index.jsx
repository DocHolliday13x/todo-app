import React, { useState } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';


// create context
export const ModeContext = React.createContext();

// create a provider
function ModeProvider({ children }){
  const [colorScheme, setColorScheme] = useState('dark');

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'dark' : 'light' );
  }

  const state = {
    colorScheme,
    toggleColorScheme,
  }


  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <ModeContext.Provider value={state}>
          {children}
        </ModeContext.Provider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}


export default ModeProvider;
// this provider is now a component that we can wrap around other components

