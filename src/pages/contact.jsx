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
        id='contact'
            className='py-20 px-6 sm:px-10 lg:px-20 bg-dark-900 min-h-screen flex items-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className='max-w-4xl mx-auto w-full'
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Outer glow container */}
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-pink to-accent-purple rounded-2xl blur opacity-25" />
                    
                    {/* Main card */}
                    <div className="relative bg-dark-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-dark-700">
                        <motion.div
                            className='text-center mb-8'
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className='text-4xl md:text-5xl font-bold mb-2'>
                                <span className="text-white">Let's Connect</span>{' '}
                                <span className="bg-gradient-to-r from-accent-pink-light to-accent-purple text-transparent bg-clip-text">
                                    Today!
                                </span>
                            </h2>
                            <p className="text-gray-400 mt-2">
                                Have a project in mind? Let's make it happen together.
                            </p>
                        </motion.div>

                        <motion.form
                            ref={form}
                            onSubmit={sendEmail}
                            className='space-y-6'
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div>
                                <label htmlFor="name" className='block mb-2 font-semibold text-white'>
                                    Name
                                </label>
                                <input 
                                    className='w-full px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors' 
                                    type="text" 
                                    name="name" 
                                    placeholder="Your name"
                                    required 
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className='block mb-2 font-semibold text-white'>
                                    Email
                                </label>
                                <input 
                                    className='w-full px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors' 
                                    type="email" 
                                    name="email" 
                                    placeholder="your.email@example.com"
                                    required 
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className='block mb-2 font-semibold text-white'>
                                    Message
                                </label>
                                <textarea 
                                    className='w-full px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors resize-none' 
                                    name="message" 
                                    rows="5" 
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>
                            
                            <div className='flex justify-center'>
                                <motion.button
                                    type="submit"
                                    className='w-full md:w-auto px-8 py-4 bg-gradient-to-r from-accent-pink to-accent-purple text-white font-bold rounded-lg hover:shadow-glow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </motion.button>
                            </div>
                        </motion.form>

                        {/* Divider */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-dark-700" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-dark-800/50 text-gray-400">Or connect via</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <motion.ul
                            className='flex justify-center gap-6'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
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
                                    className="group relative"
                                >
                                    <Whisper followCursor speaker={<Tooltip>{item.name}</Tooltip>}>
                                        <motion.a 
                                            target="_blank" 
                                            href={item.href} 
                                            className="block"
                                            whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity" />
                                            <div className="relative bg-dark-900/50 p-3 rounded-full border border-dark-700 group-hover:border-accent-pink transition-colors">
                                                <img width="40" height="40" src={item.src} alt={item.alt} />
                                            </div>
                                        </motion.a>
                                    </Whisper>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </motion.div>

            {loading && <Loader backdrop center />}
        </motion.div>
    )
}

export default Contact