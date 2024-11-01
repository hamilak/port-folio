import React from 'react'
import { Drawer } from 'rsuite'

const ServiceDrawer = ({ open, handleClose, name, description, deliverables, tools, handleContact }) => {
    const isSmallScreen = window.innerWidth < 768;

    return (
        <div>
            <Drawer open={open} onClose={handleClose} size={isSmallScreen ? 'xs' : 'md'} style={{ width: isSmallScreen ? '100%' : '50%' }}>
                <Drawer.Header>
                    <Drawer.Title>
                        <h5 className='text-lg md:text-2xl font-bold uppercase'>{name}</h5>
                    </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <div className='leading-8'>
                        <div className='mb-3'>
                            <h5 className='border-b mb-3 pb-3 uppercase'>Description</h5>
                            <p className=''>{description}</p>
                        </div>
                        <div className='mb-3'>
                            <h5 className='border-b mb-3 pb-3 uppercase'>Stack and Tools</h5>
                            <div>
                                {Array.isArray(tools) && tools.map((item, index) => (
                                    <ul key={index} className=''>
                                        <li className='list-inside list-disc'>{item}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                        <div className='mb-3'>
                            <h5 className='border-b mb-3 pb-3 uppercase'>Deliverables</h5>
                            <div>{Array.isArray(deliverables) && deliverables.map((item, index) => (
                                <ul key={index}>
                                    <li className='list-inside list-disc'>{item}</li>
                                </ul>
                            ))}</div>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={handleContact} className='px-5 py-2 font-bold hover:bg-pink-600 hover:text-white bg-gray-100 rounded-md'>Contact</button>
                        </div>
                    </div>
                </Drawer.Body>
            </Drawer>
        </div>
    )
}

export default ServiceDrawer