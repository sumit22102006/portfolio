import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaGamepad, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { projects } from '../data';

const projectImages = {
    spotify: '/projects/spotify.png',
    microsoft: '/projects/microsoft.png',
    adobe: '/projects/adobe.png',
    agrisaar: '/projects/agrisaar.png',
    irctc: '/projects/irctc.png',
    games: '/projects/games.png',
    frontend: '/projects/frontend.png',
};

const Projects = () => {
    const [activeTab, setActiveTab] = useState('Full Stack Application');

    const categories = [
        { id: 'Full Stack Application', label: 'Full Stack', icon: <FaRocket /> },
        { id: 'Clone', label: 'Clones', icon: <FaLaptopCode /> },
        { id: 'Games', label: 'Games', icon: <FaGamepad /> },
        { id: 'Frontend Projects', label: 'Frontend', icon: <FaCode /> },
    ];

    const filteredProjects = projects.filter(project => project.category === activeTab);

    return (
        <section id="projects" className="py-20 text-white min-h-screen bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <motion.div
                    className="flex flex-col items-center justify-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-display font-black text-center tracking-tight">
                        PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-orange-500">SHOWCASE</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-[#ffcc00] to-orange-500 rounded-full mt-4 shadow-[0_0_15px_rgba(255,204,0,0.5)]"></div>
                    <p className="text-gray-400 mt-6 text-center max-w-2xl text-lg font-medium">
                        Exploring the intersection of design and complex engineering through various categories.
                    </p>
                </motion.div>

                {/* Category Navigation (Tabs) */}
                <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-hide">
                    <div className="flex bg-[#111]/50 backdrop-blur-xl p-1.5 rounded-2xl border border-white/5 shadow-2xl">
                        {categories.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 relative ${
                                    activeTab === tab.id 
                                        ? 'text-black' 
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeProjectTab"
                                        className="absolute inset-0 bg-gradient-to-r from-[#ffcc00] to-orange-500 rounded-xl"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {tab.icon} {tab.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.article
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col bg-[#111]/80 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden hover:border-[#ffcc00]/50 shadow-2xl transition-all duration-300 group"
                            >
                                {/* Project Image */}
                                <div className="relative w-full h-52 overflow-hidden">
                                    <img
                                        src={projectImages[project.image]}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-[#ffcc00] uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#ffcc00] transition-colors tracking-tight">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.map((tech) => (
                                            <span 
                                                key={tech} 
                                                className="px-3 py-1 text-[10px] font-bold rounded-lg bg-white/5 text-gray-300 border border-white/10 group-hover:border-[#ffcc00]/20 group-hover:text-[#ffcc00] transition-all"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-col gap-3 mt-auto">
                                        <div className="grid grid-cols-2 gap-3">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all text-sm font-bold active:scale-95"
                                            >
                                                <FaGithub size={18} /> Code
                                            </a>
                                            
                                            {project.liveDemo !== '#' ? (
                                                <a
                                                    href={project.liveDemo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#ffcc00] to-orange-500 text-black shadow-xl shadow-[#ffcc00]/10 transition-all text-sm font-bold hover:brightness-110 active:scale-95"
                                                >
                                                    <FaExternalLinkAlt size={14} /> Live Demo
                                                </a>
                                            ) : (
                                                <button disabled className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 text-gray-500 cursor-not-allowed text-sm font-bold opacity-50">
                                                    Private
                                                </button>
                                            )}
                                        </div>
                                        
                                        {project.youtube && (
                                            <a
                                                href={project.youtube}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600/10 hover:bg-red-600/20 border border-red-600/20 text-red-500 shadow-xl shadow-red-600/5 transition-all text-sm font-bold active:scale-95"
                                            >
                                                <FaYoutube size={18} /> Watch Video Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

