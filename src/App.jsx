import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './page/Home.jsx'
import Layout from './layout/Layout.jsx'

const App = () => {
  return (
    
      <Routes>
        
      <Route path='/' element={<>
      
      <Layout>
        <Home/>
      </Layout>
      </>} />
    </Routes>
    
  )
}

export default App