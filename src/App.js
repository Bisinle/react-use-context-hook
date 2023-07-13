import React from "react";
import "./App.css";
import ComponentC from "./Components/ComponentC";

export const userContext = React.createContext();
export const schoolContext = React.createContext();
//STEP1: create the context
//STEP2: Provide the context-wrap the provide around the component that targets are nested in
//STEP3: consume the context inside the component that needs it 
    //inside the component the needs to consume the context
    //1: import the {useContext} from 'react'
    //2: import all the contexts you created like the ones above from '..App'
    //3: call the React useContext package you imported and pass the context
         //you created as an argument and assign to a variable
         //const user = userContext(userContext)
         //const school = userContext(schoolContext)



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
