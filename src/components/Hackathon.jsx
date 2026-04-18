import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTools, FaYoutube } from 'react-icons/fa';
import { hackathons } from '../data';

const hackathonImages = {
    agrisaar: 'https://images.unsplash.com/photo-1592982537447-6f2aa6c78112?w=800&h=400&fit=crop', // Agriculture / Tech image
    irctc: 'https://images.unsplash.com/photo-1474487548417-781f2f459e02?w=800&h=400&fit=crop', // Railway theme
};

const Hackathon = () => {
    const onlineHackathons = hackathons.filter(h => h.type === 'online');
    const offlineHackathons = hackathons.filter(h => h.type === 'offline');

    const renderHackathonCard = (hackathon, index) => (
        <motion.article
            key={hackathon.id}
            className="flex flex-col bg-[#111]/50 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden hover:border-[#ffcc00]/30 shadow-lg hover:shadow-[0_0_20px_rgba(255,204,0,0.15)] transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -5 }}
        >
            {/* Hackathon Image/Preview */}
            <div className="relative w-full h-56 md:h-72 overflow-hidden bg-[#030712]">
                {hackathon.liveDemo && hackathon.liveDemo !== '#' ? (
                    <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700">
                        <iframe 
                            src={hackathon.liveDemo} 
                            title={`${hackathon.title} Preview`}
                            className="w-[150%] h-[150%] border-0 origin-top-left scale-75 pointer-events-none"
                            scrolling="no"
                            tabIndex={-1}
                        />
                        {/* Overlay to prevent interaction */}
                        <div className="absolute inset-0 z-10 bg-transparent"></div>
                    </div>
                ) : (
                    <img
                        src={hackathonImages[hackathon.image] || hackathon.image}
                        alt={hackathon.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                )}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/40 to-transparent pointer-events-none"></div>
                <div className="absolute z-30 top-4 left-4 bg-[#ffcc00]/80 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    {hackathon.award ? hackathon.award : "Hackathon Project"}
                </div>
            </div>

            {/* Hackathon Content */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#ffcc00] transition-colors">
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
                                <FaTools className="text-[#ffcc00] mt-1 shrink-0" />
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
                            className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[#ffcc00]/10 text-[#ffcc00] border border-[#ffcc00]/20"
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
                            className="flex-1 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-[#ffcc00]/10 border border-white/10 hover:border-[#ffcc00]/50 text-white hover:text-[#ffcc00] hover:shadow-[0_0_15px_rgba(255,204,0,0.2)] transition-all text-sm font-semibold"
                            aria-label={`View ${hackathon.title} on GitHub`}
                        >
                            <FaGithub className="text-lg" /> Source Code
                        </a>
                    )}
                    {hackathon.youtube && (
                        <a
                            href={hackathon.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/50 text-red-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all text-sm font-semibold"
                            aria-label={`Watch ${hackathon.title} on YouTube`}
                        >
                            <FaYoutube className="text-lg" /> Video
                        </a>
                    )}
                    {hackathon.liveDemo && hackathon.liveDemo !== '#' && (
                        <a
                            href={hackathon.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#ffcc00] to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-black font-bold shadow-lg shadow-[#ffcc00]/25 border border-transparent transition-all text-sm font-semibold"
                            aria-label={`View ${hackathon.title} live demo`}
                        >
                            <FaExternalLinkAlt /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );

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
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-orange-500">Hackathons</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#ffcc00] to-orange-500 rounded-full mt-4"></div>
                </motion.div>

                {/* Offline Hackathons */}
                {offlineHackathons.length > 0 && (
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white/90">Offline Hackathons</h3>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {offlineHackathons.map((hackathon, index) => renderHackathonCard(hackathon, index))}
                        </div>
                    </div>
                )}

                {/* Online Hackathons */}
                {onlineHackathons.length > 0 && (
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white/90">Online Hackathons</h3>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {onlineHackathons.map((hackathon, index) => renderHackathonCard(hackathon, index))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hackathon;
