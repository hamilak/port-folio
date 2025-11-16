import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const sections = ['home', 'about', 'projects', 'contact']

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            const scrollPosition = window.scrollY + 100

            sections.forEach((section) => {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        console.log(element)
        if (element) {
            const offsetTop = element.offsetTop - 80
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
        setIsOpen(false)
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <motion.nav
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-dark-900/95 backdrop-blur-lg border-b border-dark-700 shadow-lg'
                    : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <motion.h5
                        className="font-bold font-logo-font text-2xl md:text-3xl cursor-pointer bg-gradient-to-r from-accent-pink-light to-accent-purple text-transparent bg-clip-text"
                        onClick={() => scrollToSection('home')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        KALIMAH
                    </motion.h5>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8 font-semibold text-base uppercase font-head-font">
                        {sections.map((section, index) => (
                            <motion.li
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`cursor-pointer relative transition-colors ${activeSection === section
                                        ? 'text-accent-pink-light'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {section}
                                {activeSection === section && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full"
                                        layoutId="activeTab"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none group"
                        aria-label="Toggle menu"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-purple rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity" />
                        <div className="relative flex flex-col gap-1.5">
                            <motion.span
                                className="w-6 h-0.5 bg-white rounded-full"
                                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-6 h-0.5 bg-white rounded-full"
                                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-6 h-0.5 bg-white rounded-full"
                                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className="md:hidden fixed inset-0 top-[73px] bg-dark-950/95 backdrop-blur-lg"
                initial={false}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
                transition={{ duration: 0.3 }}
            >
                <ul className="flex flex-col items-center justify-center h-full gap-8 font-semibold text-xl uppercase font-head-font">
                    {sections.map((section, index) => (
                        <motion.li
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`cursor-pointer transition-colors ${activeSection === section
                                    ? 'text-accent-pink-light'
                                    : 'text-gray-300'
                                }`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="relative">
                                {section}
                                {activeSection === section && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    />
                                )}
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar