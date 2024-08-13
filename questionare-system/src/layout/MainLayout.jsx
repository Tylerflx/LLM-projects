import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/share/Navbar'

const MainLayout = () => {
  return (
    <>
        <div className='dark:text-textColor dark:bg-background'>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
        </div>
    </>
  )
}

export default MainLayout