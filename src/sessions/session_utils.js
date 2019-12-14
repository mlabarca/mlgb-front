import React from "react";
import Cookies from "js-cookie";

export const setSessionCookie = (session) => {
  Cookies.remove("session");
  Cookies.set("session", session);
};

export const getSessionCookie = () => {
  const sessionCookie = Cookies.get("session");

  if (sessionCookie === undefined || sessionCookie === null) {
    return {};
  } else {
    return JSON.parse(sessionCookie);
  }
};

export const SessionContext = React.createContext({
  session: getSessionCookie(),
  setSession: () => {}
});
