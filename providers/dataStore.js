import { useLocalObservable } from "mobx-react-lite";
import { createContext, useContext } from "react";

const dataStoreContext = createContext(null);

export const DataStoreProvider = ({ children }) => {
  const dataState = useLocalObservable(() => ({
    // --- OBSERVABLES ---
    selectedDate: "2021-01-15T00:00:00Z",

    // --- ACTIONS:SETTERS ---
    setSelectedDate(value) {
      this.selectedDate = value;
    },
  }));

  return (
    <dataStoreContext.Provider value={dataState}>
      {children}
    </dataStoreContext.Provider>
  );
};

export const useDataStore = () => {
  const state = useContext(dataStoreContext);
  if (!state)
    throw new Error("Cannot use useDataStore outside of DataStoreContext");
  return state;
};
