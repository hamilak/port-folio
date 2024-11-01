import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import { Divider, Loader, Tooltip, Whisper } from 'rsuite';
import { contactList } from '../utils/lists';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true)
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_USER_ID)
            .then((result) => {
                alert("Email sent successfully!");
            }, (error) => {
                setLoading(false)
                alert("Failed to send email. Please try again.");
            })
            .finally(() => {
                setLoading(false)
            });

        e.target.reset();
    };

    return (
        <div className='leading-8 w-full'>
            <div className='w-2/3 lg:w-1/2 mx-auto md:p-16 rounded-md '>
                <div>
                    <div>
                        <h6 className='md:text-3xl text-xl text-center'>Reach out <span className='underlined underline-clip text-4xl'> TODAY!</span></h6>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='mb-4'>
                                <label htmlFor="name" className='block mb-1 font-bold'>Name</label>
                                <input className='border text-black border-gray-500 w-full p-1 rounded-md' type="text" name="name" required />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="email" className='block mb-1 font-bold'>Email</label>
                                <input className='border text-black border-gray-500 w-full p-1 rounded-md' type="email" name="email" required />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="message" className='block mb-1 font-bold'>Message</label>
                                <textarea className='border text-black border-gray-500 w-full p-1 rounded-md' name="message" rows="5" required></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md'>
                                    Send Message
                                </button>
                            </div>
                        </form>
                        <Divider>or</Divider>
                        <ul className='flex justify-center gap-6'>
                            {contactList.map((item, index) => (
                                <Whisper key={index} followCursor speaker={<Tooltip>{item.name}</Tooltip>}>
                                    <li className="cursor-pointer">
                                        <a target="_blank" href={item.href} className="hover:no-underline">
                                            <img width="50" height="50" src={item.src} alt={item.alt} />
                                        </a>
                                    </li>
                                </Whisper>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {loading && (
                <Loader backdrop center />
            )}
        </div>
    )
}

export default Contact