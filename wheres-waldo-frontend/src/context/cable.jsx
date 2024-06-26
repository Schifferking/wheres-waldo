import React from "react";
import ActionCable from "actioncable";

const CableContext = React.createContext();

function CableProvider({ children }) {
  /* Url for development, change it for production */
  const actionCableUrl = "ws://localhost:3000/cable";
  const CableApp = {};
  CableApp.cable = ActionCable.createConsumer(actionCableUrl);

  return (
    <CableContext.Provider value={CableApp}>{children}</CableContext.Provider>
  );
}

export { CableContext, CableProvider };
