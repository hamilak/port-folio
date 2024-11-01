import React from 'react';
import { projects } from '../utils/lists';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();

    const handleNavigate = (project) => {
        navigate(`/project/${project.title.toLowerCase()}`, { state: project });
    };

    return (
        <div>
            <div className='m-4'>
                <h5 className='text-center uppercase text-4xl'><span className='text-pink-600'>Work </span>Collection</h5>
            </div>
            <div className="md:flex flex-wrap gap-10 justify-center">
                {projects.map((item, index) => (
                    <div 
                        key={index} 
                        className="md:w-1/3 flex flex-col items-center justify-between rounded-md cursor-pointer" 
                        onClick={() => handleNavigate(item)}
                    >
                        <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover rounded-md mb-4 p-1" />
                        <h5 className="text-center text-xl font-bold uppercase">{item.title}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
