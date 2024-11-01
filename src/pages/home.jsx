import React from 'react'
import { Tooltip, Whisper } from 'rsuite'
import { programmingLanguages } from '../utils/lists'

const Home = () => {
    return (
        <div className='flex justify-center items-center h-screen overflow-hidden p-8'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <div className='relative w-52 h-52 border border-pink-300 flex justify-center items-center rounded-full overflow-hidden'>
                    <div className='w-44 h-44 rounded-full border border-blue-900 absolute bg-transparent'></div>
                    <div className='w-48 h-48 rounded-full overflow-hidden'>
                        <img
                            src="/mypicture.png"
                            alt="My Picture"
                            className="object-cover w-full h-full"
                            width={1000} height={1000}
                        />
                    </div>
                </div>
                <div>
                    <div className='leading-10 text-base md:text-xl text-center'>
                        <p>
                            Hello, my name is <span className='font-head-font font-semibold text-2xl '>KALIMAH ARIGBABU.</span>
                        </p>
                        <p>Your friendly neighbourhood <span className='text-decorate font-semibold'>full-stack web developer</span> currently based in Nigeria.</p>
                    </div>
                    <div>
                        <ul className='flex gap-8 justify-center mt-4'>
                            {programmingLanguages.map((item, index) => (
                                <Whisper followCursor trigger='hover' speaker={<Tooltip>{item.name}</Tooltip>} key={index}>
                                    <li className="cursor-pointer">
                                        <img width="32" height="32" src={item.imageSrc} alt={item.alt} />
                                    </li>
                                </Whisper>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <small className='absolute bottom-4 font-xs'>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></small>
        </div>
    )
}

export default Home
