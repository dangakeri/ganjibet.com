import { useContext, createContext, useReducer } from "react";
const AppContext = createContext();

const initialState = {
  initialRound: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "updateInitialRound":
      return { ...state, initialRound: 1 };
    default:
      throw new Error("Something went wrong");
  }
}

function ModalProvider({ children }) {
  let [{ initialRound }, dispatch] = useReducer(reducer, initialState);

  function updateInitialRound() {
    dispatch({ type: "updateInitialRound" });
    sessionStorage.setItem("initialRound", 1);
  }

  return (
    <AppContext.Provider value={{ initialRound, dispatch, updateInitialRound }}>
      {children}
    </AppContext.Provider>
  );
}
function useANewppState() {
  const context = useContext(AppContext);

  if (context === undefined) return;

  return context;
}

export { ModalProvider, useANewppState };
