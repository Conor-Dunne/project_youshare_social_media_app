import { Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react'
import Login from './component/Login';
import Home from './container/Home';


const App = () => {
  return (
    <div>
      Home
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

