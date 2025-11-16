import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'
import ProjectInformation from './pages/projectInformation'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/project/:title' element={<ProjectInformation />}></Route>
        </Routes>
    )
}

export default Router