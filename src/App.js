import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Cars from './components/Cars';
import NoPage from './components/NoPage';
import CreateForm from './components/CreateForm';
import { ConfigProvider, theme } from 'antd';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {          
          colorPrimary: '#D1A222',
          colorWarning: '#FF0000',
          algorithm: theme.darkAlgorithm,
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cars" element={<Cars />} />
            <Route path="cars/create" element={<CreateForm />} />
            <Route path="orders" element={<p>Orders</p>} /> 
            <Route path="about" element={<p>about</p>} /> 
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};
export default App;