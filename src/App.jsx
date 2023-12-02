import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Transaction from './components/Transaction'
import Data from './components/Data'

function App() {


  return (
    <div className='bg-[#1F2537]'>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/transactions' element={<Transaction />} />
        <Route path='/data' element={<Data />} />

      </Routes>
    </div>
  )
}

export default App
