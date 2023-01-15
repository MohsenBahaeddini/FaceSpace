import { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("username"))
  );
  const [status, setStatus] = useState("loading");

  const signIn = (name) => {
    setStatus("loading");
    console.log(name);
    fetch(`/api/signin/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name: name }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setCurrentUser(data.data);
          setStatus("idle");
          sessionStorage.setItem("username", JSON.stringify(data.data));
        }
        console.log(data);
      });
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, status, setStatus, signIn }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
