import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { projectsList } from '../utils/lists';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { GoLinkExternal } from "react-icons/go";

const ProjectInformation = () => {
    const { title } = useParams();
    const navigate = useNavigate()
    const [currentSlide, setCurrentSlide] = useState(0);

    const project = projectsList.find((item) => item.title.toLowerCase() === title.toLowerCase());

    useEffect(() => {
        if (project && project.slides && project.slides.length > 0) {
            setCurrentSlide(0);
        }
    }, [project]);

    const handleNextSlide = () => {
        if (project && project.slides) {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % project.slides.length);
        }
    };

    const handlePrevSlide = () => {
        if (project && project.slides) {
            setCurrentSlide((prevSlide) => (prevSlide - 1 + project.slides.length) % project.slides.length);
        }
    };

    return (
        <div className="mx-auto my-10">
            <div>
                <div className='flex items-center my-4'>
                    <button onClick={() => navigate(-1)} className='border-b-2 border-b-pink-600'>Back</button>
                    <h2 className="text-xl md:text-3xl font-bold uppercase m-2 flex-1 text-center">{project.title}</h2>
                </div>
                <div className='flex justify-center'>
                    <button onClick={handlePrevSlide} className="mr-4"><IoChevronBack /></button>
                    <img src={project.slides[currentSlide]} alt="Slide" className="md:w-2/3 h-auto object-contain rounded-md" />
                    <button onClick={handleNextSlide} className="ml-4"><IoChevronForward /></button>
                </div>
                <div className='bg-blue-50 p-4 my-4 rounded-md'>
                    <div className='flex justify-between items-center'>
                        <h4 className='md:text-xl text-base uppercase'>Stack & Tools</h4>
                        <a target='_blank' href={project.link} className='no-underline text-black font-semibold hover:no-underline'><small className='flex gap-1 items-center'>Link <GoLinkExternal size={10} /></small></a>
                    </div>
                    <ul className='list-inside list-disc mt-2'>
                        {project.stack.map((item) => (
                            <li className='md:text-base text-sm'>{item}</li>
                        ))}
                    </ul>
                </div>
                {project.description && (
                    <div className='bg-blue-50 p-4 my-4 rounded-md'>
                        <h4 className='md:text-xl text-base uppercase'>Description</h4>
                        <p className="text-sm md:text-base mt-2">{project.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectInformation