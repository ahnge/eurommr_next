import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [parentTag, setParentTag] = useState();
  const [dkm, setDkm] = useState(false);

  return (
    <AppContext.Provider
      value={{
        parentTag,
        setParentTag,
        dkm,
        setDkm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalcontext = () => {
  return useContext(AppContext);
};
