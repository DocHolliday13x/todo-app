import React from 'react';

// create context
export const SettingsContext = React.createContext(); 

// create a provider
function SettingsProvider({ children }){
  // const [title, setTitle] = React.useState('Some Site');
  // const [email, setEmail] = React.useState('nomad@codefellows.com');
  const [pageItems, setPageItems] = React.useState(3);
  const [displayCompleted, setDisplayCompleted] = React.useState(false);
  const [sort, setSort] = React.useState('difficulty');

  //we can 'do the thing' to make calculations, etc
  // useReducer to micro-manage state

  const values = {
    pageItems,
    displayCompleted,
    sort,
    setSort,
    setPageItems,
    setDisplayCompleted
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}


export default SettingsProvider;
// this provider is now a component that we can wrap around other components



