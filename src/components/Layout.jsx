import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
        <div className=''>
        <Navbar />
        </div>
        <div className='mt-16 py-2 px-10'>
        {children}
        </div>
    </div>
  )
}

export default Layout