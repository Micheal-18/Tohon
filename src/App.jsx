import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './page/Home.jsx';
import Layout from './layout/Layout.jsx';
import Register from './page/Register.jsx';
import Login from './page/Login.jsx';
import Dashboard from './dashboard/dashboard.jsx';
import MainDashboard from './dashboard/MainDashboard.jsx';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': '711 Tohon',
      '/cart': 'Cart. 711 Tohon',
      '/products': 'Products. 711 Tohon',
      '/dashboard': 'Dashboard. 711 Tohon'
    };

    document.title = titles[location.pathname] || '711 Tohon';
  }, [location.pathname]);

  return (
<>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="/register" element={<Register />}   />
      <Route path="/login" element={<Login />}   />

      <Route path='/dashboard' element={<Dashboard />}>
      <Route index element={<MainDashboard />} />
      </Route>
      
    </Routes>
</>
  );
};

export default App;
