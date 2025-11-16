import React from 'react';
import { projects } from '../utils/lists';
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <motion.div
            id="projects"
            className="py-20 px-6 sm:px-10 lg:px-60 bg-dark-950 scroll-mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.h2 
                className="text-center text-4xl md:text-5xl font-bold mb-16"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className="bg-gradient-to-r from-accent-pink-light to-accent-purple text-transparent bg-clip-text">
                    Work
                </span>{' '}
                <span className="text-white">Collection</span>
            </motion.h2>

            <div className="space-y-20 max-w-7xl mx-auto">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            className={`grid md:grid-cols-2 gap-8 items-center ${
                                !isEven ? 'md:grid-flow-dense' : ''
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Project Info */}
                            <motion.div
                                className={`${!isEven ? 'md:col-start-2' : ''}`}
                                whileHover={{ x: isEven ? 10 : -10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="relative group">
                                    {/* Glow effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-pink to-accent-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
                                    
                                    {/* Card */}
                                    <div className="relative bg-dark-800/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-dark-700 group-hover:border-accent-pink transition-colors">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white pr-4">
                                                {project.title}
                                            </h3>
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-accent-pink-light hover:text-accent-pink transition-colors flex-shrink-0"
                                                aria-label={`Visit ${project.title}`}
                                                whileHover={{ scale: 1.2, rotate: 45 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                            </motion.a>
                                        </div>
                                        
                                        <p className="text-gray-300 leading-relaxed mb-4 text-base">
                                            {project.description}
                                        </p>
                                        
                                        <p className="font-semibold mb-4">
                                            <span className="text-gray-400">Role:</span>{' '}
                                            <span className="bg-gradient-to-r from-accent-pink to-accent-purple text-transparent bg-clip-text">
                                                {project.role}
                                            </span>
                                        </p>

                                        {/* Tech stack tags (if available) */}
                                        {project.tags && (
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-3 py-1 text-xs bg-dark-900/50 border border-dark-700 rounded-full text-gray-300"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Project Image */}
                            <motion.div
                                className={`${!isEven ? 'md:col-start-1 md:row-start-1' : ''} relative group`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {/* Glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent-pink to-accent-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
                                
                                {/* Image container */}
                                <div className="relative overflow-hidden rounded-lg border border-dark-700">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-auto transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Projects;