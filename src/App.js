import React from "react";
import "./App.css";
import ComponentC from "./Components/ComponentC";

export const userContext = React.createContext();
export const schoolContext = React.createContext();

function App() {
  return (
    <div className="App">
      <userContext.Provider value={"Bisinle"}>
        <schoolContext.Provider value={'Moringa'}>
          <ComponentC />
        </schoolContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
