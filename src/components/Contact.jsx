import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheckCircle, HiClipboardCopy
} from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); 
    const [copied, setCopied] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            // Using FormSubmit.co - The easiest way to receive emails directly!
            const targetEmail = 'sumit.m.kumar.cg@gmail.com'; 
            const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Portfolio Message from ${formData.name}`,
                    _captcha: 'false'
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 8000);
        }
    };

    return (
        <section id="contact" className="py-24 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffcc00]/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <motion.div
                    className="flex flex-col items-center justify-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-display font-black text-center tracking-tight uppercase">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-orange-500">Collaborate</span>
                    </h2>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-[#ffcc00] to-orange-500 rounded-full mt-4 shadow-[0_0_15px_rgba(255,204,0,0.5)]"></div>
                    <p className="text-gray-400 mt-8 text-center max-w-2xl text-lg font-medium">
                        Need a fast response? Use the Contact Form or hit the **WhatsApp Fast Lane** below.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    
                    {/* Contact Info Card - Span 2 columns */}
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-[#111]/80 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                            <h3 className="text-3xl font-black mb-8 tracking-tight">Contact Info</h3>
                            
                            <div className="space-y-8">
                                {[
                                    { 
                                        icon: HiMail, 
                                        label: 'Email', 
                                        value: personalInfo.email, 
                                        href: `mailto:${personalInfo.email}`, 
                                        color: 'text-[#ffcc00]',
                                        isCopyable: true 
                                    },
                                    { 
                                        icon: HiPhone, 
                                        label: 'Phone', 
                                        value: personalInfo.phone, 
                                        href: `tel:${personalInfo.phone}`, 
                                        color: 'text-orange-500' 
                                    },
                                    { 
                                        icon: HiLocationMarker, 
                                        label: 'Location', 
                                        value: personalInfo.location, 
                                        color: 'text-orange-400' 
                                    },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-5 group">
                                        <div className={`w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                            <item.icon className="w-7 h-7" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-gray-500 font-black uppercase tracking-[0.2em] mb-1">{item.label}</p>
                                            <div className="flex items-center gap-2">
                                                {item.href ? (
                                                    <a href={item.href} className="text-base text-white font-bold hover:text-[#ffcc00] transition-colors truncate block">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-base text-white font-bold truncate">{item.value}</p>
                                                )}
                                                {item.isCopyable && (
                                                    <button 
                                                        onClick={handleCopyEmail}
                                                        className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-500 hover:text-[#ffcc00]"
                                                        title="Copy Email"
                                                    >
                                                        {copied ? <HiCheckCircle className="text-green-500 w-5 h-5" /> : <HiClipboardCopy className="w-5 h-5" />}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* WhatsApp Fast Lane */}
                            <div className="mt-10">
                                <a 
                                    href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-4 rounded-2xl transition-all duration-300 shadow-xl group"
                                >
                                    <FaWhatsapp className="w-6 h-6 group-hover:scale-125 transition-transform" />
                                    <span>WhatsApp Fast Lane</span>
                                </a>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5">
                                <div className="flex justify-center gap-5">
                                    {[
                                        { icon: FaGithub, href: personalInfo.socials.github, label: 'GitHub' },
                                        { icon: FaLinkedinIn, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
                                        { icon: FaTwitter, href: personalInfo.socials.twitter, label: 'Twitter' },
                                        { icon: FaYoutube, href: personalInfo.socials.youtube, label: 'YouTube' },
                                    ].map((social, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ffcc00] hover:border-[#ffcc00] transition-all duration-300"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-4 h-4" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                            <div className="mt-12 pt-10 border-t border-white/5">
                                <h4 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-6 text-center">Follow My Work</h4>
                                <div className="flex justify-center gap-5">
                                    {[
                                        { icon: FaGithub, href: personalInfo.socials.github, label: 'GitHub' },
                                        { icon: FaLinkedinIn, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
                                        { icon: FaTwitter, href: personalInfo.socials.twitter, label: 'Twitter' },
                                        { icon: FaYoutube, href: personalInfo.socials.youtube, label: 'YouTube' },
                                    ].map((social, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ffcc00] hover:border-[#ffcc00] transition-all duration-300 shadow-xl"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form - Span 3 columns */}
                    <motion.div
                        className="lg:col-span-3 lg:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-[#111]/80 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-10 shadow-2xl relative">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#ffcc00] focus:ring-1 focus:ring-[#ffcc00] transition-all duration-300 font-medium"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="hello@example.com"
                                            className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#ffcc00] focus:ring-1 focus:ring-[#ffcc00] transition-all duration-300 font-medium"
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center ml-1">
                                        <label className="text-sm font-black text-gray-500 uppercase tracking-widest">Message</label>
                                        <span className={`text-[10px] font-bold ${formData.message.length > 450 ? 'text-red-500' : 'text-gray-600'}`}>
                                            {formData.message.length} / 500
                                        </span>
                                    </div>
                                    <textarea
                                        name="message"
                                        required
                                        maxLength="500"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your project vision starts here..."
                                        className="w-full bg-black/50 border border-white/10 rounded-[2rem] px-6 py-5 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#ffcc00] focus:ring-1 focus:ring-[#ffcc00] transition-all duration-300 font-medium resize-none leading-relaxed"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full relative py-5 bg-gradient-to-r from-[#ffcc00] via-yellow-400 to-orange-600 text-black font-black text-lg uppercase tracking-wider rounded-2xl shadow-[0_10px_30px_rgba(255,204,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,204,0,0.5)] transition-all duration-300 overflow-hidden flex items-center justify-center gap-3 disabled:opacity-70 group"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                            <span>Processing...</span>
                                        </div>
                                    ) : (
                                        <>
                                            Launch Discussion
                                            <HiPaperAirplane className="w-6 h-6 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </>
                                    )}
                                    {/* Subtle shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                                </motion.button>

                                <AnimatePresence>
                                    {submitStatus === 'success' && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center justify-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 font-bold text-center"
                                        >
                                            <HiCheckCircle className="text-xl" />
                                            Message captured! I'll reply within 24 hours.
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
