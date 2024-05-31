import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Cars from './components/Cars';
import NoPage from './components/NoPage';
import Cart from './components/Cart';
import CreateForm from './components/CreateForm';
import { ConfigProvider } from 'antd';
import Login from './components/Login';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#F4801A',
          borderRadius: '20px',
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cars" element={<Cars />} />
            <Route path="login" element={<Login />} />
            <Route path="cars/create" element={<CreateForm />} />
            <Route path="cars/edit/:id" element={<CreateForm />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
