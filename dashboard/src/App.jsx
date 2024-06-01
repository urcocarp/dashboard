import { React, useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Header from './Header'
import Home from './Home'

function App() {
  const [openSidebarToggle, SetOpenSidebarToggle]= useState(false)
  
  const OpenSidebar=()=>{
    SetOpenSidebarToggle(!openSidebarToggle)

  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} />
      <Home/>
    
    </div>
  )
}
export default App
