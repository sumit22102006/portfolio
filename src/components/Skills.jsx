import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma
} from 'react-icons/fa';
import {
    SiMongodb, SiCplusplus
} from 'react-icons/si';
import { HiCode, HiColorSwatch } from 'react-icons/hi';
import { technicalSkills, designSkills } from '../data';

const iconMap = {
    html5: FaHtml5,
    css3: FaCss3Alt,
    javascript: FaJs,
    react: FaReact,
    mongodb: SiMongodb,
    c: HiCode,
    cplusplus: SiCplusplus,
    github: FaGithub,
    git: FaGitAlt,
    figma: FaFigma,
    design: HiColorSwatch,
};

const Skills = () => {
    const renderSkillCard = (skill, index) => {
        const IconComponent = iconMap[skill.icon] || HiCode;

        return (
            <motion.div
                key={skill.name}
                className="group flex flex-col items-center justify-center p-6 bg-[#111]/50 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-[#ffcc00]/30 shadow-lg shadow-black/20 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(255, 204, 0, 0.1), 0 10px 10px -5px rgba(255, 204, 0, 0.04)"
                }}
            >
                {/* Float Animation Wrapper */}
                <motion.div
                    animate={{ 
                        y: [0, -5, 0],
                    }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.2
                    }}
                    className="w-full flex flex-col items-center"
                >
                    {/* Icon with Inner Spinner */}
                    <div className="relative w-16 h-16 mb-4">
                        <motion.div 
                            className="absolute -inset-2 rounded-2xl border border-[#ffcc00]/20 hidden group-hover:block"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="w-full h-full rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-[#ffcc00]/50 transition-all duration-300">
                            <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-[#ffcc00] group-hover:scale-110 transition-all duration-300" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center w-full mb-3 px-1">
                        <h4 className="text-white font-medium">{skill.name}</h4>
                        <span className="text-[10px] font-mono text-[#ffcc00] opacity-0 group-hover:opacity-100 transition-opacity">
                            {skill.level}%
                        </span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#ffcc00] to-orange-500 rounded-full relative"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + (index * 0.1) }}
                        >
                            <motion.div 
                                className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 blur-[2px]"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <section id="skills" className="py-20 text-white">
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
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-orange-500">Skills</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#ffcc00] to-orange-500 rounded-full mt-4"></div>
                </motion.div>

                <div className="space-y-16">
                    {/* Technical Skills */}
                    <div>
                        <motion.h3
                            className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="w-10 h-10 rounded-xl bg-[#ffcc00]/10 flex items-center justify-center border border-[#ffcc00]/20">
                                <HiCode className="text-[#ffcc00] w-6 h-6" />
                            </span>
                            Technical Skills
                        </motion.h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                            {technicalSkills.map((skill, index) => renderSkillCard(skill, index))}
                        </div>
                    </div>

                    {/* Design Skills */}
                    <div>
                        <motion.h3
                            className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                                <HiColorSwatch className="text-orange-400 w-6 h-6" />
                            </span>
                            Tools & Design
                        </motion.h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                            {designSkills.map((skill, index) => renderSkillCard(skill, index))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
