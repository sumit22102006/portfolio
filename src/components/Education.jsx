import { motion } from 'framer-motion';
import { HiAcademicCap, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import { education } from '../data';

const Education = () => {
    return (
        <section id="education" className="min-h-screen py-20 text-white flex flex-col justify-center">
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
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Education</span>
                    </h2>
                    <div className="h-1 w-20 bg-cyan-500 rounded-full mt-4 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                </motion.div>

                <div className="flex flex-col gap-16 max-w-5xl mx-auto">
                    {/* Education Timeline */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
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
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0a0a1a] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all z-10 box-content">
                                        <div className={`w-3 h-3 rounded-full ${item.status === 'ongoing' ? 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]' : 'bg-indigo-500'}`}></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-[#111]/50 backdrop-blur-xl rounded-2xl border border-white/5 group-hover:border-cyan-500/20 transition-all duration-300">
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
                                                <HiLocationMarker className="text-indigo-400" />
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

export default Education;
