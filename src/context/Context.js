import React, { createContext, useReducer } from "react";
import Reducer from "../reducer/Reducer";
import data from "../data/currencies";

export const Context = createContext();

const initialState = data;
export default function ContextProvider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState, () => {
    const cur = localStorage.getItem("data");
    return cur ? JSON.parse(cur) : initialState;
  });
  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}
