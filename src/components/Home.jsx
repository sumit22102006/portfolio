import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { personalInfo } from '../data';
import profileImg from '../assets/profile-image.jpeg';

const Home = () => {
    const defaultImg = "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop";

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Content */}
                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xl md:text-2xl text-cyan-400 font-medium tracking-wide">
                            {personalInfo.greeting}
                        </h2>
                        
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                                {personalInfo.name}
                            </span>
                        </h1>
                        
                        <div className="text-xl md:text-3xl text-cyan-400 font-bold min-h-[40px] flex items-center gap-2">
                            <span className="text-gray-300 font-medium">I am a </span>
                            <TypeAnimation
                                sequence={personalInfo.roles.flatMap(role => [role, 2000])}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="inline-block"
                            />
                        </div>
                        
                        <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
                            {personalInfo.summary || personalInfo.tagline}
                        </p>

                        





                        
                        <div className="flex flex-wrap gap-4 mt-4">
                            {[
                                { icon: FaGithub, href: personalInfo.socials.github, label: "GitHub" },
                                { icon: FaLinkedinIn, href: personalInfo.socials.linkedin, label: "LinkedIn" },
                                { icon: FaTwitter, href: personalInfo.socials.twitter, label: "Twitter" },
                                { icon: FaYoutube, href: personalInfo.socials.youtube, label: "YouTube" },
                                { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Resume Button */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <motion.a
                                href="/sumit kumar resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Resume</span>
                                <svg className="w-5 h-5 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        className="relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Glowing backdrop blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-cyan-500/20 rounded-full blur-[60px] md:blur-[80px]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-violet-600/20 rounded-full blur-[60px] md:blur-[80px]"></div>

                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border-2 border-cyan-500/30 p-2 z-10 group">
                            <div className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-[#030712]">
                                <img
                                    src={profileImg || defaultImg}
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                    onError={(e) => { e.target.src = defaultImg }}
                                />
                            </div>
                            
                            {/* Orbital accents */}
                            <motion.div 
                                className="absolute -inset-4 rounded-full border border-cyan-500/20 border-t-cyan-400"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div 
                                className="absolute -inset-8 rounded-full border border-violet-500/10 border-b-violet-500"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Home;
