import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import { Divider, Loader, Tooltip, Whisper } from 'rsuite';
import { contactList } from '../utils/lists';
import { motion } from 'framer-motion';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_USER_ID
        )
            .then(() => {
                alert("Email sent successfully!");
            }, () => {
                setLoading(false);
                alert("Failed to send email. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });

        e.target.reset();
    };

    return (
        <motion.div
            className='leading-8 w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className='w-2/3 lg:w-1/2 mx-auto md:p-16 rounded-md'
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div>
                    <motion.h6
                        className='md:text-3xl text-xl text-center'
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Reach out <span className='underlined underline-clip text-4xl'> TODAY!</span>
                    </motion.h6>

                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
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
                            <motion.button
                                type="submit"
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </motion.form>

                    <Divider>or</Divider>

                    <motion.ul
                        className='flex justify-center gap-6'
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                    >
                        {contactList.map((item, index) => (
                            <motion.li
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <Whisper followCursor speaker={<Tooltip>{item.name}</Tooltip>}>
                                    <a target="_blank" href={item.href} className="hover:no-underline">
                                        <img width="50" height="50" src={item.src} alt={item.alt} />
                                    </a>
                                </Whisper>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </motion.div>

            {loading && <Loader backdrop center />}
        </motion.div>
    )
}

export default Contact
