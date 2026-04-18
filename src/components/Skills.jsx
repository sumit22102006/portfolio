import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaRocket
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
    const allSkills = [...technicalSkills, ...designSkills];
    
    // Duplicate skills for seamless horizontal scroll
    const firstRow = [...technicalSkills, ...technicalSkills];
    const secondRow = [...designSkills, ...designSkills, ...designSkills, ...designSkills]; // More dupes for shorter list

    const renderSkillCard = (skill, index) => {
        const IconComponent = iconMap[skill.icon] || HiCode;

        return (
            <motion.div
                key={`${skill.name}-${index}`}
                className="group flex flex-col items-center justify-center p-6 bg-[#111]/50 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-[#ffcc00]/30 shadow-lg shadow-black/20 transition-all duration-300 relative overflow-hidden min-w-[160px] md:min-w-[200px]"
                whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(255, 204, 0, 0.1)"
                }}
            >
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

                <div className="flex flex-col items-center w-full">
                    <h4 className="text-white font-bold text-sm md:text-base tracking-tight">{skill.name}</h4>
                    <span className="text-[10px] font-mono text-[#ffcc00] mt-1">
                        {skill.level}% Confidence
                    </span>
                    
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mt-3">
                        <div 
                            className="h-full bg-gradient-to-r from-[#ffcc00] to-orange-500 rounded-full"
                            style={{ width: `${skill.level}%` }}
                        />
                    </div>
                </div>
            </motion.div>
        );
    };

    const FloatingBackground = () => {
        const floatingIcons = [
            { icon: 'react', top: '10%', left: '15%', size: 80, delay: 0 },
            { icon: 'javascript', top: '70%', left: '10%', size: 60, delay: 2 },
            { icon: 'mongodb', top: '20%', left: '80%', size: 70, delay: 4 },
            { icon: 'cplusplus', top: '80%', left: '75%', size: 90, delay: 1 },
            { icon: 'figma', top: '40%', left: '85%', size: 50, delay: 3 },
            { icon: 'html5', top: '60%', left: '20%', size: 65, delay: 5 },
            { icon: 'css3', top: '15%', left: '40%', size: 55, delay: 0 },
            { icon: 'git', top: '85%', left: '45%', size: 75, delay: 2 },
        ];
        
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {floatingIcons.map((item, i) => {
                    const Icon = iconMap[item.icon];
                    return (
                        <motion.div
                            key={`float-${i}`}
                            className="absolute text-[#ffcc00]/20"
                            style={{ 
                                top: item.top, 
                                left: item.left,
                            }}
                            animate={{ 
                                y: [0, -40, 0],
                                x: [0, 20, 0],
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ 
                                duration: 8 + Math.random() * 4, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: item.delay
                            }}
                        >
                            <Icon size={item.size} />
                        </motion.div>
                    );
                })}
            </div>
        );
    };

    return (
        <section id="skills" className="py-24 text-white relative overflow-hidden bg-[#070707]">
            <FloatingBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="flex flex-col items-center justify-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-display font-black text-center tracking-tight uppercase">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-orange-500">Expertise</span>
                    </h2>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-[#ffcc00] to-orange-500 rounded-full mt-4 shadow-[0_0_15px_rgba(255,204,0,0.5)]"></div>
                    <p className="text-gray-400 mt-6 text-center max-w-2xl text-lg font-medium">
                        A loop of technologies I've mastered to build pixel-perfect, scalable web solutions.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {/* Row 1: Left Scrolling */}
                    <div className="relative group">
                        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                            <motion.div 
                                className="flex gap-6 py-4"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ 
                                    duration: 30, 
                                    repeat: Infinity, 
                                    ease: "linear" 
                                }}
                            >
                                {firstRow.map((skill, index) => renderSkillCard(skill, index))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Row 2: Right Scrolling (Reverse) */}
                    <div className="relative group">
                        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                            <motion.div 
                                className="flex gap-6 py-4"
                                animate={{ x: ["-50%", "0%"] }}
                                transition={{ 
                                    duration: 25, 
                                    repeat: Infinity, 
                                    ease: "linear" 
                                }}
                            >
                                {secondRow.map((skill, index) => renderSkillCard(skill, index))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <motion.div 
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {[
                        { label: "Frontend", value: "95%", icon: <SiMongodb className="rotate-12" /> },
                        { label: "Backend", value: "85%", icon: <HiCode /> },
                        { label: "Design", value: "80%", icon: <HiColorSwatch /> },
                        { label: "Performance", value: "90%", icon: <FaRocket /> },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <div className="text-[#ffcc00] text-3xl mb-3">{stat.icon}</div>
                            <div className="text-2xl font-black text-white">{stat.value}</div>
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
