import React from 'react';
import {Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { Write } from "./pages/Write"
import { Article } from "./pages/Article"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/write" element={<Write/>}/>
        <Route path="/article/:id" element={<Article />}/>
        <Route path="/article/edit/:id" element={<Write/>}/>
        <Route element={<div>Page not found</div>}/>
        <Route path="/*" element={<Home/>}/>
        {/* *의 의미 : / 뒤에 무언가 오면 Home으로 라우팅 시키겠다 */}
      </Routes>
    </>
  );
};

export default App;