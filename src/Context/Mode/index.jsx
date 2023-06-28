import React from 'react';

// create context
export const ModeContext = React.createContext();

// create a provider
function ModeProvider({ children }){
  const [mode, setMode] = React.useState('light');

  //we can 'do the thing' to make calculations, etc
  // useReducer to micro-manage state

  const toggleMode = () => {
    setMode( mode === 'light' ? 'dark' : 'light' );
  }

  const state = {
    mode,
    toggleMode,
  }

  return (
    <ModeContext.Provider value={state}>
      {children}
    </ModeContext.Provider>
  )
}


export default ModeProvider;
// this provider is now a component that we can wrap around other components

