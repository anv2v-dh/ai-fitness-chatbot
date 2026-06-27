import React from 'react'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Chatbox from './components/Chatbox'
import Community from './pages/Community'
import Credits from './pages/Credits'

const App = () => {
  return (
    <div className='dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white'>
      <div className='flex h-screen w-screen'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Chatbox />} />
          <Route path='/Credits' element={<Credits />} />
          <Route path='/community' element={<Community />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
