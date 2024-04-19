import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Cars from './components/Cars';
import NoPage from './components/NoPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<Cars />} />
          <Route path="orders" element={<p>Orders</p>} /> 
          <Route path="about" element={<p>about</p>} /> 
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;