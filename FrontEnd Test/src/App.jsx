
import React from 'react'
import { Route , Routes } from 'react-router-dom';
import Home from './componant/Home';
import CreateCard from './componant/CreateCard';
import OneCard from './componant/OneCard';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCard/>} />
        <Route path="/:id" element={<Home/>} />
        </Routes>
    </>
  )
}

export default App
