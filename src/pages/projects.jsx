import React from 'react';
import { projects } from '../utils/lists';
import { motion } from 'framer-motion'

const ProjectSection = () => {
    return (
        <motion.div
      className="py-20 px-6 sm:px-10 lg:px-60"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
            <h2 className="text-center text-3xl font-bold mb-8">
                <span className="text-pink-600">Work</span> Collection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <React.Fragment key={index}>
                            {isEven ? (
                                <>
                                    <div className="p-4 shadow-sm border border-pink-500 rounded-md">
                                        <h2 className="text-3xl font-bold">{project.title}</h2>
                                        <p className="mt-2 leading-7 text-base">{project.description}</p>
                                        <p className='text-pink-600 text-base font-semibold'>Role - {project.role}</p>
                                    </div>
                                    <div>
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div className="p-4 shadow-sm border border-pink-500 rounded-md">
                                        <h2 className="text-2xl font-bold">{project.title}</h2>
                                        <p className="mt-2 leading-7 text-base">{project.description}</p>
                                        <p className='text-pink-600 text-base font-semibold'>Role - {project.role}</p>
                                    </div>
                                </>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default ProjectSection;
