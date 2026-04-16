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

                    {/* Education Timeline */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xl">
                                <HiAcademicCap />
                            </span>
                            Education Journey
                        </h3>
                        
                        {/* Timeline Core */}
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                            {education.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    {/* Icon/Dot */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0a0a1a] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all z-10 box-content">
                                        <div className={`w-3 h-3 rounded-full ${item.status === 'ongoing' ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]' : 'bg-violet-500'}`}></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-[#0a0a1a]/50 backdrop-blur-xl rounded-2xl border border-white/5 group-hover:border-cyan-500/20 transition-all duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                                            <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                {item.degree}
                                            </h4>
                                            <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full w-max
                                                ${item.status === 'ongoing' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}
                                            `}>
                                                {item.status === 'ongoing' ? 'Pursuing' : 'Completed'}
                                            </span>
                                        </div>
                                        
                                        <p className="text-gray-300 mb-4">{item.institution}</p>
                                        
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <HiLocationMarker className="text-violet-400" />
                                                {item.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <HiCalendar className="text-cyan-400" />
                                                {item.period}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
