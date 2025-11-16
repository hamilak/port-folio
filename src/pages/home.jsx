import React from 'react'
import { Tooltip, Whisper } from 'rsuite'
import { motion } from 'framer-motion'
import { programmingLanguages } from '../utils/lists'
import Contact from './contact'
import Projects from './projects'
import About from './about'

const Home = () => {
    return (
        <>
            <div id="home" className='relative flex justify-center items-center min-h-screen overflow-hidden py-8 px-6 sm:px-10 lg:px-60 bg-gradient-to-br from-dark-950 via-purple-900 to-dark-950'>
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-20 left-10 w-72 h-72 bg-accent-pink-light/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue-light/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.5, 0.3, 0.5],
                        }}
                        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                    />
                </div>

                <motion.div
                    className='relative z-10 flex flex-col justify-center items-center gap-6'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        className='relative group w-[250px] h-[250px] sm:w-[380px] sm:h-[380px]'
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.div
                            className='absolute inset-0 rounded-full bg-gradient-to-r from-accent-pink-light via-accent-purple to-accent-blue-light p-1'
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                        >
                            <div className="w-full h-full rounded-full bg-dark-950" />
                        </motion.div>

                        <motion.div
                            className='absolute inset-3 rounded-full border-2 border-accent-purple/50 bg-transparent'
                            animate={{ rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                        />

                        <div className='absolute inset-4 rounded-full overflow-hidden border-4 border-dark-900 shadow-glow-lg'>
                            <img
                                src="/mypicture.png"
                                alt="Kalimah Arigbabu"
                                className="object-cover w-full h-full"
                                width={700}
                                height={700}
                            />
                        </div>

                        <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-pink-light to-accent-blue opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                        />
                    </motion.div>

                    <motion.div
                        className='text-center max-w-4xl'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        <div className='leading-10 text-base md:text-xl space-y-2'>
                            <p>
                                <span className='font-head-font font-semibold text-4xl md:text-5xl bg-gradient-to-r from-accent-pink-light via-accent-purple to-accent-blue-light text-transparent bg-clip-text'>
                                    KALIMAH ARIGBABU
                                </span>
                            </p>
                            <p className='text-gray-300 text-lg md:text-2xl leading-relaxed'>
                                Your friendly neighbourhood{' '}
                                <span className='font-semibold bg-gradient-to-r from-accent-pink to-accent-purple text-transparent bg-clip-text'>
                                    full-stack web developer
                                </span>{' '}
                                currently based in Canada.
                            </p>
                        </div>

                        <ul className='flex flex-wrap gap-4 md:gap-6 justify-center mt-8'>
                            {programmingLanguages.map((item, index) => (
                                <Whisper
                                    followCursor
                                    trigger='hover'
                                    speaker={<Tooltip>{item.name}</Tooltip>}
                                    key={index}
                                >
                                    <motion.li
                                        className="group relative cursor-pointer"
                                        whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 + index * 0.05 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-purple rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity" />

                                        <div className="relative bg-dark-800/50 backdrop-blur-sm p-3 rounded-full border border-dark-700 group-hover:border-accent-pink transition-colors">
                                            <img
                                                width="30"
                                                height="30"
                                                src={item.imageSrc}
                                                alt={item.alt}
                                                className="w-10 h-10"
                                            />
                                        </div>
                                    </motion.li>
                                </Whisper>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="w-6 h-10 border-2 border-accent-pink-light rounded-full flex justify-center pt-2">
                        <motion.div
                            className="w-1.5 h-1.5 bg-accent-pink-light rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        />
                    </div>
                </motion.div>

                <small className='absolute md:bottom-4 bottom-2 text-gray-500 text-xs'>
                    Icons by{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://icons8.com"
                        className="text-accent-pink-light hover:text-accent-pink transition-colors"
                    >
                        Icons8
                    </a>
                </small>
            </div>

            {/* SERVICES & ABOUT SECTION */}
            <About />

            <Projects />
            <Contact />
        </>
    )
}

export default Home