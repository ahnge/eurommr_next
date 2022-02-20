import { createContext, useContext, useState } from "react";
import { useInView } from "react-intersection-observer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [parentTag, setParentTag] = useState();
  const [dkm, setDkm] = useState(false);

  const [heroActive, setHeroActive] = useState(false);
  const [aboutActive, setAvoutActive] = useState(false);
  const [serviceActive, setServiceActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const mySetStates = [
    setHeroActive,
    setAvoutActive,
    setServiceActive,
    setProjectsActive,
    setContactActive,
  ];

  const myStates = [
    heroActive,
    aboutActive,
    serviceActive,
    projectsActive,
    contactActive,
  ];

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.5,
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.5,
  });

  const { ref: serviceRef, inView: serviceInView } = useInView({
    threshold: 0.5,
  });

  const { ref: projectRef, inView: projectInView } = useInView({
    threshold: 0.5,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.5,
  });

  const myInViews = [
    heroInView,
    aboutInView,
    serviceInView,
    projectInView,
    contactInView,
  ];

  return (
    <AppContext.Provider
      value={{
        parentTag,
        setParentTag,
        dkm,
        setDkm,
        heroRef,
        aboutRef,
        serviceRef,
        projectRef,
        contactRef,
        mySetStates,
        myStates,
        myInViews,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalcontext = () => {
  return useContext(AppContext);
};
