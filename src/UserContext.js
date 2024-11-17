import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext= createContext();

export const UserProvider = ({children}) =>{

  let [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://randomuser.me/api/?results=20");
            const data = await response.json();
            setUsers(data.results);
           
          } catch (error) {
            console.error("Error fetching profiles:", error);
          }
        };
        fetchData();
      }, []);

      return(
        <UserContext.Provider value={{users}}>
            {children}
            </UserContext.Provider>

      )
}

export const useUsers = () =>{
    return useContext(UserContext);
}