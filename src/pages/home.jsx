import React from 'react'
import { Tooltip, Whisper } from 'rsuite'
import { motion } from 'framer-motion'
import { programmingLanguages } from '../utils/lists'
import Contact from './contact'
import Projects from './projects'

const Home = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen overflow-hidden py-8 px-6 sm:px-10 lg:px-60 '>
                <motion.div
                    className='flex flex-col justify-center items-center gap-6'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        className='relative w-[420px] h-[420px] border border-pink-300 flex justify-center items-center rounded-full overflow-hidden'
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.div
                            className='w-[380px] h-[380px] rounded-full border border-blue-900 absolute bg-transparent'
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                        />
                        <div className='w-[400px] h-[400px] rounded-full overflow-hidden'>
                            <img
                                src="/mypicture.png"
                                alt="My Picture"
                                className="object-cover w-full h-full"
                                width={1000} height={1000}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        <div className='leading-10 text-base md:text-xl text-center'>
                            <p>
                                <span className='font-head-font font-semibold text-3xl'>
                                    KALIMAH ARIGBABU
                                </span>
                            </p>
                            <p>
                                Your friendly neighbourhood{' '}
                                <span className='text-decorate font-semibold'>
                                    full-stack web developer
                                </span>{' '}
                                currently based in Nigeria.
                            </p>
                        </div>
                        <ul className='flex flex-wrap gap-4 md:gap-8 justify-center mt-4'>
                            {programmingLanguages.map((item, index) => (
                                <Whisper
                                    followCursor
                                    trigger='hover'
                                    speaker={<Tooltip>{item.name}</Tooltip>}
                                    key={index}
                                >
                                    <motion.li
                                        className="cursor-pointer"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <img
                                            width="32"
                                            height="32"
                                            src={item.imageSrc}
                                            alt={item.alt}
                                        />
                                    </motion.li>
                                </Whisper>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                <small className='absolute md:bottom-4 bottom-0 font-xs'>
                    Icons by{' '}
                    <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">
                        Icons8
                    </a>
                </small>
            </div>
            <section className="py-20 px-6 sm:px-10 lg:px-60 bg-[#fcf7fa]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    {/* SERVICES */}
                    <motion.div
                        className="md:w-1/3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl font-bold uppercase mb-6">Services</h3>
                        <ul className="relative pl-6">
                            <span className="absolute top-1 left-[5px] w-[2px] h-full bg-pink-300"></span>

                            <li className="relative flex flex-col gap-1 mb-6">
                                {/* <span className="absolute left-[-6px] top-1 w-3 h-3 bg-pink-500 rounded-full"></span> */}
                                <span className="font-semibold">Website Development</span>
                                <span className="text-sm text-gray-500">
                                    HTML, CSS, JavaScript, React, TailwindCSS
                                </span>
                            </li>

                            <li className="relative flex flex-col gap-1 mb-6">
                                {/* <span className="absolute left-[-6px] top-1 w-3 h-3 bg-pink-500 rounded-full"></span> */}
                                <span className="font-semibold">Web App Development</span>
                                <span className="text-sm text-gray-500">
                                    NestJs, Postgres, MongoDB, REST APIs
                                </span>
                            </li>

                            <li className="relative flex flex-col gap-1 mb-6">
                                {/* <span className="absolute left-[-6px] top-1 w-3 h-3 bg-pink-500 rounded-full"></span> */}
                                <span className="font-semibold">Website Hosting</span>
                                <span className="text-sm text-gray-500">
                                    Netlify, Vercel, AWS, Render, Digital Ocean, cPanel
                                </span>
                            </li>

                            <li className="relative flex flex-col gap-1 mb-6">
                                <span className="font-semibold">DevOps & Deployment</span>
                                <span className="text-sm text-gray-500">
                                    Git, GitHub Actions, Docker, CI/CD Pipelines, Cloudflare
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Divider */}
                    <div className="hidden md:flex md:flex-col items-center">
                        <span className="h-full w-px bg-gray-300"></span>
                    </div>

                    {/* ABOUT */}
                    <motion.div
                        className="md:w-2/3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl font-bold uppercase mb-4">About</h3>
                        <p className="text-base leading-8 mb-4">
                            My name is <span className="uppercase underline text-pink-600">Kalimah Arigbabu</span>,
                            I’m a full-stack web developer working and living in Nigeria.
                        </p>
                        <p className="text-base mb-3 leading-8">
                            I started coding because I genuinely love solving problems, and over time, I’ve picked up a
                            well-rounded set of skills, from building solid backends to creating smooth, responsive frontends.
                            I’m always open to feedback, continuously refining my skills to deliver the best possible outcomes.
                        </p>
                        <p className="text-base leading-8">
                            Every day is an opportunity to learn something new in the world of tech, and that’s what keeps me motivated.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Projects />
            <Contact />
        </>
    )
}

export default Home
