import React, { Component }  from 'react';
import './App.css';
import './App.min.css';
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {ContextProvider} from './Datacontext'

import LandingPage from '../src/pages/landing'
import Fillform from '../src/pages/fillform'
import Recordlist from '../src/pages/recordlist'
import RecordDetails from  '../src/pages/recordDetail'
function App() {

  return (
    <ContextProvider>
      {
      <div className="App">
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/fillform" element={<Fillform />}/>
            <Route path="/recordlist" element={<Recordlist />}/>
            <Route path="/recordlist/*" element={<RecordDetails />}/>
        </Routes>
      </div>
      }
    </ContextProvider>
  );
}

export default App;
