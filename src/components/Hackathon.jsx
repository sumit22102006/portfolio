import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTools } from 'react-icons/fa';
import { hackathons } from '../data';

const hackathonImages = {
    agrisaar: 'https://images.unsplash.com/photo-1592982537447-6f2aa6c78112?w=800&h=400&fit=crop', // Agriculture / Tech image
};

const Hackathon = () => {
    return (
        <section id="hackathon" className="py-20 text-white">
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
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Hackathons</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mt-4"></div>
                    <p className="text-gray-400 mt-6 text-center max-w-2xl text-lg">
                        Innovative solutions built during intensive coding events.
                    </p>
                </motion.div>

                {/* Hackathons Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {hackathons.map((hackathon, index) => (
                        <motion.article
                            key={hackathon.id}
                            className="flex flex-col bg-[#0a0a1a]/50 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden hover:border-emerald-500/30 shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Hackathon Image */}
                            <div className="relative w-full h-56 md:h-72 overflow-hidden">
                                <img
                                    src={hackathon.image === 'agrisaar' ? hackathonImages.agrisaar : hackathon.image}
                                    alt={hackathon.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/40 to-transparent"></div>
                                <div className="absolute top-4 left-4 bg-emerald-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {hackathon.award ? hackathon.award : "Hackathon Project"}
                                </div>
                            </div>

                            {/* Hackathon Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                    {hackathon.title}
                                </h3>
                                
                                <p className="text-gray-300 text-sm md:text-base mb-6 flex-1 leading-relaxed">
                                    {hackathon.description}
                                </p>

                                {/* Features (if any) */}
                                {hackathon.features && (
                                    <ul className="mb-6 space-y-2 text-sm text-gray-400">
                                        {hackathon.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <FaTools className="text-emerald-500 mt-1 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {hackathon.techStack.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="px-3 py-1.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                                    {hackathon.github && hackathon.github !== '#' && (
                                        <a
                                            href={hackathon.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/50 text-white hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all text-sm font-semibold"
                                            aria-label={`View ${hackathon.title} on GitHub`}
                                        >
                                            <FaGithub className="text-lg" /> Source Code
                                        </a>
                                    )}
                                    {hackathon.liveDemo && hackathon.liveDemo !== '#' && (
                                        <a
                                            href={hackathon.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white shadow-lg shadow-emerald-500/25 border border-transparent transition-all text-sm font-semibold"
                                            aria-label={`View ${hackathon.title} live demo`}
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathon;
