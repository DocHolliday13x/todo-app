import React from 'react';

// create context
export const SettingsContext = React.createContext(); 

// create a provider
function SettingsProvider({ children }){
  const [pageItems, setPageItems] = React.useState(3);
  const [displayCompleted, setDisplayCompleted] = React.useState(false);
  const [sort, setSort] = React.useState('difficulty');

  // local storage
  const saveLocalStorage = () => {
    localStorage.setItem('settings', JSON.stringify({ pageItems, displayCompleted, sort }));
    localStorage.setItem('pageItems', JSON.stringify(pageItems));
    localStorage.setItem('displayCompleted', JSON.stringify(displayCompleted));
    localStorage.setItem('sort', JSON.stringify(sort));
  };


  const values = {
    pageItems,
    displayCompleted,
    sort,
    setSort,
    setPageItems,
    setDisplayCompleted,
    saveLocalStorage // add this to the values object
  }

  React.useEffect(() => {
    const settings = JSON.parse(localStorage.getItem('settings'));
    if (settings) {
      setPageItems(settings.pageItems);
      setDisplayCompleted(settings.displayCompleted);
      setSort(settings.sort);
    }
  }, []);

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}


export default SettingsProvider;
// this provider is now a component that we can wrap around other components



