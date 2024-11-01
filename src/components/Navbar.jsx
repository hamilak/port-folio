import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { listMenu } from '../utils/lists'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    const handleNavigate = (loc) => {
        navigate(`/${loc}`)
        setIsOpen(false) // Close menu after navigation
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`fixed top-0 right-0 left-0 z-50 border-b p-4 flex justify-between items-center bg-white`}>
            <h5 className="font-bold font-logo-font text-xl cursor-pointer" onClick={() => navigate('/home')}>KALIMAH</h5>

            <button
                onClick={toggleMenu}
                className="block md:hidden focus:outline-none z-50"
            >
                {!isOpen ? (
                    <span className="text-2xl">&#9776;</span>
                ) : (
                    <span className="text-2xl">&#10005;</span>
                )}
            </button>

            <ul className={`fixed inset-0 bg-white flex-col justify-center items-center gap-6 font-semibold text-base uppercase font-head-font 
                            ${isOpen ? 'flex' : 'hidden'} md:flex md:bg-transparent md:flex-row md:static`}>
                {listMenu.map((item) => (
                    <li
                        key={item}
                        onClick={() => handleNavigate(item)}
                        className={`cursor-pointer hover:text-pink-600 
                                    ${location.pathname === `/${item}` ? 'text-pink-600' : ''}`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar
