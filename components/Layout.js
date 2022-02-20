import { useGlobalcontext } from "./context";
import { useEffect, useRef } from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { setParentTag } = useGlobalcontext();
  const parentTag = useRef();

  useEffect(() => {
    setParentTag(parentTag.current);
    console.log("parentTag setted");
  }, []);

  return (
    <div className="font-mont scroll-smooth" ref={parentTag}>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
