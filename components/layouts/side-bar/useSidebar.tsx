import { useState } from "react";

const useSidebar = (initialState: boolean, key: string) => {
  const [sidebar, setSidebar] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem(key)!) || initialState
      : initialState
  );
  const handleSidebar = () => {
    setSidebar(!sidebar);
    localStorage.setItem(key, JSON.stringify(!sidebar));
  };

  return {
    handleSidebar,
    sidebar,
  };
};
export default useSidebar;
