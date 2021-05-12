import React, { createContext, useState } from "react";

const initialState = {
    filterItems: [],
    // country:[],
    // city:[],
    // language:[],
    
};

export const AppContext = createContext(initialState);

export const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState);
    
  return (
    <AppContext.Provider value={{ state, setState }}>
      {props.children} 
    </AppContext.Provider>
  );
};


