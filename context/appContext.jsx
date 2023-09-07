"use client";

import { createContext, useContext, useReducer } from "react";

// reducer
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "OPEN_SIDEBAR":
      return { ...state, isSidebarOpen: true };
    case "CLOSE_SIDEBAR":
      return { ...state, isSidebarOpen: false };
    default:
      return state;
  }
};

// initial state
const initialState = {
  isSidebarOpen: false,
};

// create context
const AppContext = createContext({});

// context provider
export const AppProvider = ({ children }) => {
  const [state, defaultDispatch] = useReducer(reducer, initialState);

  // format dispatch object
  const dispatch = (type, payload) => defaultDispatch({ type, payload });

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
