import React from 'react'
import { services } from '../utils/lists'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()

    const handleNavigateContact = () => {
        navigate('/contact')
    }
    return (
        <div className='leading-8'>
            <div>
                <div className='border-b border-b-gray-100 pb-6 mb-6'>
                    <div className='w-4/5 mx-auto'>
                        <h5 className='uppercase text-center mb-2'>ABOUT ME</h5>
                        <p className='font-normal text-base leading-8'>Every day is an opportunity to learn something new in the world of tech, and that’s what keeps me motivated.I started coding because I genuinely love solving problems, and over time, I’ve picked up a well-rounded set of skills, from building solid backends to creating smooth, responsive frontends.I’m always open to feedback, continuously refining my skills to deliver the best possible outcomes.</p>
                    </div>
                </div>
                <div className=''>
                    <div className='border-b border-b-gray-100 mb-6 pb-6'>
                        <p className='text-center mb-4 font-bold text-xl'>SERVICES</p>
                        <div className='flex flex-wrap justify-center gap-10 w-full'>
                            {services.map((item) => (
                                <div key={item.name} className="w-1/3 rounded-md flex flex-col justify-between min-h-64 bg-blue-600 text-white p-4"
                                >
                                    <div>
                                        <div className="flex justify-center items-center border-b pb-2 mb-4">
                                            <img className='mr-2' width="24" height="24" src={item.image} alt="service" />
                                            <h5 className="font-bold uppercase">{item.name}</h5>
                                        </div>
                                        <p className="mb-4 text-center font-semibold">{item.description}</p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <button onClick={handleNavigateContact} className='px-6 py-2 rounded-md bg-white text-blue-600 font-bold hover:text-pink-600'>
                                            Contact me
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div>
                        <p className='text-center mb-4 font-bold text-xl uppercase'> Blog</p>

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default About