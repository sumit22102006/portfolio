import { motion } from 'framer-motion';
import { HiAcademicCap, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import { aboutBio, education } from '../data';
import profileImg from '../assets/profile-image.jpeg';

const About = () => {
    const defaultImg = "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop";

    return (
        <section id="about" className="py-20 text-white min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <motion.div
                    className="flex flex-col items-center justify-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-center">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-orange-500">Me</span>
                    </h2>
                    <div className="h-1 w-20 bg-[#ffcc00] rounded-full mt-4"></div>
                </motion.div>

                <div className="flex flex-col gap-16 max-w-6xl mx-auto">
                    
                    {/* Bio Section with Image */}
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#111]/50 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 lg:p-12 hover:border-[#ffcc00]/30 transition-all duration-500 shadow-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Image Container */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#ffcc00] to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10">
                                <img 
                                    src={profileImg || defaultImg} 
                                    alt="About Me" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { e.target.src = defaultImg }}
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-3xl font-bold flex items-center gap-3 text-white">
                                <span className="w-2 h-8 bg-[#ffcc00] rounded-full"></span>
                                Who I Am
                            </h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                                {aboutBio.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="first-letter:text-2xl first-letter:font-bold first-letter:text-[#ffcc00] first-letter:mr-1">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
