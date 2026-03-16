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
                className="group flex flex-col items-center justify-center p-6 bg-[#0a0a1a]/50 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-cyan-500/30 shadow-lg shadow-black/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
            >
                {/* Glow Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#030712] border border-white/10 flex items-center justify-center mb-4 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <h4 className="text-white font-medium mb-3">{skill.name}</h4>
                    
                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 relative"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                        >
                            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
                        </motion.div>
                    </div>
                </div>
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
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Skills</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4"></div>
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
                            <span className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                                <HiCode className="text-cyan-400 w-6 h-6" />
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
                            <span className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20">
                                <HiColorSwatch className="text-violet-400 w-6 h-6" />
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
