import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './page/Home.jsx';
import Layout from './layout/Layout.jsx';
import Register from './page/Register.jsx';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Home. 711 Tohon',
      '/cart': 'Cart. 711 Tohon',
      '/products': 'Products. 711 Tohon'
    };

    document.title = titles[location.pathname] || '711 Tohon';
  }, [location.pathname]);

  return (
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
    </Routes>
  );
};

export default App;
