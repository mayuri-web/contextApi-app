import React, { createContext } from 'react';
import './App.css';
import CompA from './Components/CompA';

const Fname = createContext();
const Lname = createContext();
function App() {
  return (
    <>
      <Fname.Provider value={'Mayuri'}>
        <Lname.Provider value={"Yawalkar"}>
          <CompA />
        </Lname.Provider>
      </Fname.Provider>
      
    </>
  );
}

export default App;
export {Fname, Lname};