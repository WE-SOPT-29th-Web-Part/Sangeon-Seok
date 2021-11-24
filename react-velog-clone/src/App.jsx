import React from 'react';
import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import Write from "./pages/Write"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route element={<div>Page not found</div>}/>
      </Routes>
    </>
  );
};

export default App;