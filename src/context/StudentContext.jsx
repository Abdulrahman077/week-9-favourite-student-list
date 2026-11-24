import { createContext, useState } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  return (
    <StudentContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </StudentContext.Provider>
  );
}

export default StudentContext;