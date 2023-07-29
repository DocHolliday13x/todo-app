import React, { useEffect, useState } from 'react';

// create context
export const SettingsContext = React.createContext();


// create a provider
function SettingsProvider({ children }) {
  const [pageItems, setPageItems] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');

  // local storage
  const saveLocalStorage = () => {
    localStorage.setItem('pageItems', JSON.stringify(+pageItems));//+pageItems converts string to number
    localStorage.setItem('showCompleted', JSON.stringify(showCompleted));
    localStorage.setItem('sort', JSON.stringify(sort));
  };

  const values = {
    pageItems,
    setPageItems,
    showCompleted,
    setShowCompleted,
    sort,
    setSort,
    saveLocalStorage 
  }


  useEffect(() => { 
  const localPageItems = localStorage.getItem('pageItems');
  const localShowCompleted = localStorage.getItem('showCompleted');
  const localSort = localStorage.getItem('sort');


  if(localPageItems){
    setPageItems(JSON.parse(localPageItems));
  }
  if(localShowCompleted){
    setShowCompleted(JSON.parse(localShowCompleted));
  }
  if(localSort){
    setSort(JSON.parse(localSort))
  };
}, []);

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}


export default SettingsProvider;
// this provider is now a component that we can wrap around other components



