import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
            {/* Animated Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#ffcc00 1px, transparent 1px), linear-gradient(90deg, #ffcc00 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Scanning Line */}
            <motion.div
                className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ffcc00]/20 to-transparent"
                animate={{
                    top: ['0%', '100%']
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Glowing Blobs */}
            <div className="absolute inset-0 opacity-20 blur-[100px]">
                <motion.div 
                    className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#ffcc00] rounded-full blur-[120px]"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Bottom Left Blob */}
                <motion.div 
                    className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-orange-600 rounded-full blur-[150px]"
                    animate={{
                        x: [0, 150, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Center Floating Blob */}
                <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/40 rounded-full blur-[100px]"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
        </div>
    );
};

export default AnimatedBackground;
