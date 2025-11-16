import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id='about' className="relative py-20 px-6 sm:px-10 lg:px-40 bg-dark-900">
    <div className="flex flex-col md:flex-row justify-between items-start gap-8 max-w-7xl mx-auto">
        {/* SERVICES */}
        <motion.div
            className="md:w-1/3 w-full scroll-mt-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h3 className="text-3xl font-bold uppercase mb-8 bg-gradient-to-r from-accent-pink-light to-accent-purple text-transparent bg-clip-text">
                Services
            </h3>
            <ul className="space-y-4">
                {[
                    {
                        title: 'Website Development',
                        desc: 'HTML, CSS, JavaScript, React, TailwindCSS',
                        icon: <img src='https://img.icons8.com/nolan/64/code.png' alt="Code" className="w-12 h-12" />
                    },
                    {
                        title: 'Web App Development',
                        desc: 'NestJs, Postgres, MongoDB, REST APIs',
                        icon: <img src='https://img.icons8.com/nolan/64/web.png' alt="Web" className="w-12 h-12" />
                    },
                    {
                        title: 'Website Hosting',
                        desc: 'Netlify, Vercel, AWS, Render, Digital Ocean, cPanel',
                        icon: <img src='https://img.icons8.com/nolan/64/cloud.png' alt="Cloud" className="w-12 h-12" />
                    },
                    {
                        title: 'DevOps & Deployment',
                        desc: 'Git, GitHub Actions, Docker, CI/CD Pipelines, Cloudflare',
                        icon: <img src='https://img.icons8.com/nolan/64/rocket.png' alt="Rocket" className="w-12 h-12" />
                    }
                ].map((service, index) => (
                    <motion.li
                        key={index}
                        className="group relative bg-dark-800/30 backdrop-blur-sm p-5 rounded-xl border border-dark-700 hover:border-accent-pink transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                    >
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/10 to-accent-purple/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative flex items-start gap-3">
                            {service.icon}
                            <div className="flex-1">
                                <span className="font-semibold text-white block mb-1">
                                    {service.title}
                                </span>
                                <span className="text-sm text-gray-400">
                                    {service.desc}
                                </span>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </motion.div>

        {/* Divider */}
        <div className="hidden md:flex md:flex-col items-center">
            <span className="h-full w-px bg-gradient-to-b from-transparent via-dark-700 to-transparent"></span>
        </div>

        {/* ABOUT */}
        <motion.div
            className="md:w-2/3 w-full scroll-mt-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h3 className="text-3xl font-bold uppercase mb-6 bg-gradient-to-r from-accent-blue-light to-accent-purple text-transparent bg-clip-text">
                About Me
            </h3>

            <div className="space-y-4 text-gray-300 leading-8">
                <p className="text-lg">
                    My name is{' '}
                    <span className="font-semibold bg-gradient-to-r from-accent-pink to-accent-purple text-transparent bg-clip-text">
                        Kalimah Arigbabu
                    </span>
                    , I'm a full-stack web developer working and living in Canada.
                </p>
                <p className="text-base">
                    I started coding because I genuinely love solving problems, and over time, I've picked up a
                    well-rounded set of skills, from building solid backends to creating smooth, responsive frontends.
                    I'm always open to feedback, continuously refining my skills to deliver the best possible outcomes.
                </p>
                <p className="text-base">
                    Every day is an opportunity to learn something new in the world of tech, and that's what keeps me motivated.
                </p>

                {/* Stats Section */}
                <div className="pt-6 grid grid-cols-3 gap-4">
                    <motion.div
                        className="text-center p-4 bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-3xl font-bold bg-gradient-to-r from-accent-pink to-accent-pink-light text-transparent bg-clip-text">
                            3+
                        </div>
                        <div className="text-sm text-gray-400 mt-1">Years Experience</div>
                    </motion.div>
                    <motion.div
                        className="text-center p-4 bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-purple-light text-transparent bg-clip-text">
                            10+
                        </div>
                        <div className="text-sm text-gray-400 mt-1">Projects Done</div>
                    </motion.div>
                    <motion.div
                        className="text-center p-4 bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-3xl font-bold bg-gradient-to-r from-accent-blue to-accent-blue-light text-transparent bg-clip-text">
                            100%
                        </div>
                        <div className="text-sm text-gray-400 mt-1">Client Satisfaction</div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </div>
</section>
  )
}

export default About