import { motion } from 'framer-motion';
import {
    HiCode, HiColorSwatch, HiDesktopComputer, HiServer
} from 'react-icons/hi';
import { services } from '../data';

const iconMap = {
    web: HiDesktopComputer,
    design: HiColorSwatch,
    fronted: HiCode, // typo check in data
    frontend: HiCode,
    fullstack: HiServer,
};

const Services = () => {
    return (
        <section id="services" className="py-20 text-white">
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
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Services</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || HiCode;

                        return (
                            <motion.div
                                key={service.id}
                                className="group relative p-8 bg-[#0a0a1a]/50 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                {/* Background design element */}
                                <div className="absolute -right-4 -bottom-4 text-8xl font-black text-white/[0.02] group-hover:text-cyan-500/[0.05] transition-colors select-none">
                                    0{index + 1}
                                </div>

                                <div className="w-14 h-14 rounded-2xl bg-[#030712] border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                                    <IconComponent className="w-7 h-7 text-cyan-400" />
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                                    {service.title}
                                </h3>
                                
                                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                                    {service.description}
                                </p>
                                
                                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
