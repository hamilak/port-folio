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
                                        <div className="flex justify-between items-center">
  <h2 className="text-3xl font-bold">{project.title}</h2>
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-600 hover:text-pink-800"
    aria-label={`Visit ${project.title}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H19.5M19.5 6V12M19.5 6L10.5 15"
      />
    </svg>
  </a>
</div>
                                        
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
                                    <div className="flex justify-between items-center">
  <h2 className="text-3xl font-bold">{project.title}</h2>
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-600 hover:text-pink-800"
    aria-label={`Visit ${project.title}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H19.5M19.5 6V12M19.5 6L10.5 15"
      />
    </svg>
  </a>
</div>
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
