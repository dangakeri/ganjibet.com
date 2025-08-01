import { useContext, createContext, useReducer, useEffect } from "react";
const AppContext = createContext();

const initialState = {
  user: null,
  isAuth: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "createAccount":
      return { ...state, user: action.payload };
    case "currUser":
      return { ...state, user: action.payload };
    case "updateAuthState":
      return { ...state, isAuth: action.payload };
    case "updateUserWallet":
      return {
        ...state,
        user: action.payload,
      };
    default:
      throw new Error("Something went wrong");
  }
}

function AppProvider({ children }) {
  let [{ user, isAuth }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCurrentUser();

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  function logOut() {
    dispatch({ type: "createAccount", payload: null });
    localStorage.clear();
  }

  function updateUserWallet(amount) {
    dispatch({ type: "updateUserWallet", payload: amount });
  }
  function getCurrentUser() {
    const user = localStorage.getItem("user");

    if (!user || user === "undefined") {
      localStorage.removeItem("user");
      dispatch({ type: "updateAuthState", payload: false });
      return;
    }

    if (user != null) {
      try {
        const currentUser = JSON.parse(user);
        dispatch({ type: "currUser", payload: currentUser });
        dispatch({ type: "updateAuthState", payload: true });
      } catch (error) {
        localStorage.removeItem("user");
        dispatch({ type: "updateAuthState", payload: false });
      }
    } else {
      dispatch({ type: "updateAuthState", payload: false });
    }
  }

  // function getCurrentUser() {
  //   const user = localStorage.getItem("user");
  //   if (user === "undefined") {
  //     localStorage.removeItem("user");
  //     dispatch({ type: "updateAuthState", payload: false });
  //     return;
  //   }

  //   if (user != null) {
  //     const currentUser = JSON.parse(user);

  //     dispatch({ type: "currUser", payload: currentUser });
  //     dispatch({ type: "updateAuthState", payload: true });
  //   } else {
  //     dispatch({ type: "updateAuthState", payload: false });
  //   }
  // }

  return (
    <AppContext.Provider
      value={{
        user,
        isAuth,
        dispatch,
        logOut,
        updateUserWallet,
        getCurrentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
function useAppState() {
  const context = useContext(AppContext);

  if (context === undefined) return;

  return context;
}

export { AppProvider, useAppState };
