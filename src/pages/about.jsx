import React, { useEffect, useState } from 'react';
import { programmingLanguages, services } from '../utils/lists';
import { useNavigate } from 'react-router-dom';
import ServiceDrawer from '../components/ServiceDrawer';

const About = () => {
    const [open, setOpen] = useState(false)
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate()

    const handleContact = () => {
        navigate('/contact')
    }

    const handleClose = () => {
        setOpen(false)
    }

    const openDrawer = (service) => {
        setSelectedService(service);
        setOpen(true)
    }

    const fixedPositions = [
        { x: 400, y: 50 },
        { x: 100, y: 540 },
        { x: 500, y: 150 },
        { x: 240, y: 300 },
        { x: 480, y: 390 },
        { x: 280, y: 100 },
        { x: 250, y: 500 },
        { x: 550, y: 580 },
    ];

    return (
        <div className='leading-8 py-4'>
            <div className='w-full lg:w-1/2 float-left'>
                <div className='mb-4'>
                    <div>
                        <p className='text-4xl mb-2 font-bold leading-snug'>My name is <span className='uppercase underline text-pink-600'>Kalimah Arigbabu</span>, I’m a full-stack web developer working and living in Nigeria.</p>
                        <p className='font-medium text-xl leading-normal'>I started coding because I genuinely love solving problems, and over time, I’ve picked up a well-rounded set of skills, from building solid backends to creating smooth, responsive frontends. I’m always open to feedback, continuously refining my skills to deliver the best possible outcomes.</p>
                        <p className='font-medium text-xl leading-normal'>Every day is an opportunity to learn something new in the world of tech, and that’s what keeps me motivated.</p>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <p className='mb-4 font-bold text-2xl'>SERVICES</p>
                        <div className=''>
                            {services.map((item) => (
                                <div key={item.name} className="rounded-md flex flex-col justify-between py-4">
                                    <div>
                                        <div className='md:flex items-center justify-between'>
                                            <div className="flex gap-1 items-center">
                                                <img className='mr-2' width="100" height="100" src={item.image} alt="service" />
                                                <h5 className="font-bold uppercase">{item.name}</h5>
                                            </div>
                                            <div className='flex justify-center'>
                                            <button onClick={() => openDrawer(item)} className='text-blue-500 hover:underline font-semibold'>View Service</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <a href="/Kalimah.Resume.pdf" download>
                                <button className='px-5 py-2 m-4 hover:bg-pink-600 rounded-md bg-pink-500 text-white shadow-md font-bold'>Download CV</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:block min-h-screen float-right w-1/2'>
                <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                    {programmingLanguages.map((item, index) => (
                        <div
                            key={item.name}
                            className='absolute w-20 h-20 flex justify-center items-center rounded-full border-gray-200 border animate-roll'
                            style={{
                                top: `${fixedPositions[index]?.y}px`,
                                left: `${fixedPositions[index]?.x}px`,
                                transition: 'top 1s ease-in-out, left 1s ease-in-out',
                            }}
                        >
                            <img src={item.imageSrc} alt={item.name} className='w-10 h-10' />
                        </div>
                    ))}
                </div>
            </div>
            {selectedService && (
                <ServiceDrawer open={open} handleClose={handleClose} name={selectedService.name} description={selectedService.description} deliverables={selectedService.deliverables} tools={selectedService.tools} handleContact={handleContact} />
            )}
        </div>
    );
};

export default About;