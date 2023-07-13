import React from 'react';
import './App.css';
import ComponentC from './Components/ComponentC'




export const userContext = React.createContext()

function App() {
  return (
    <div className="App">
      <userContext.Provider value={'Bisinle'}>
   <ComponentC/>
      </userContext.Provider>
    </div>
  );
}

export default App;
