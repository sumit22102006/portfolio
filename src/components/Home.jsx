import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';
import { personalInfo } from '../data';

const Home = () => {
    return (
        <section id="home" className="min-h-screen relative flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a]">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                {/* Ghosted Code Snippets */}
                <pre className="absolute left-10 top-1/4 text-[10px] md:text-sm text-gray-500 font-mono hidden lg:block select-none">
                    {`function buildAwesome() {
  const stack = ["React", "Node"];
  return stack.map(tech => 
    createMagic(tech)
  );
}`}
                </pre>
                <pre className="absolute right-10 bottom-1/4 text-[10px] md:text-sm text-gray-500 font-mono hidden lg:block select-none">
                    {`async function fetchFuture() {
  try {
    const ideas = await brainstorm();
    return execute(ideas);
  } catch(e) {
    debug(e);
  }
}`}
                </pre>

                {/* Decorative Icons */}
                <div className="absolute left-[15%] top-1/2 -translate-y-1/2 text-gray-700/30 text-8xl md:text-[12rem] hidden md:block">
                    {"</>"}
                </div>
                <div className="absolute right-[15%] top-1/3 text-gray-700/20 text-6xl md:text-8xl hidden md:block">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2C6.48 2 2 4.69 2 8v8c0 3.31 4.48 6 10 6s10-2.69 10-6V8c0-3.31-4.48-6-10-6zm0 18c-4.41 0-8-1.79-8-4v-1.12c1.78 1.05 4.7 1.62 8 1.62s6.22-.57 8-1.62V16c0 2.21-3.59 4-8 4zm0-6c-4.41 0-8-1.79-8-4v-1.12c1.78 1.05 4.7 1.62 8 1.62s6.22-.57 8-1.62V10c0 2.21-3.59 4-8 4zm0-6c-4.41 0-8-1.79-8-4s3.59-4 8-4 8 1.79 8 4-3.59 4-8 4z"/></svg>
                </div>
                <div className="absolute right-[20%] bottom-1/3 text-gray-700/20 text-6xl md:text-8xl hidden md:block">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"/></svg>
                </div>

                {/* Subtle Radial Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-cyan-500/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
                {/* Main Heading (First Name) */}
                <motion.h1 
                    className="text-7xl md:text-[10rem] lg:text-[12rem] font-display font-black tracking-tighter text-white leading-none mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    SUMIT
                </motion.h1>

                {/* Sub Heading (Last Name - Outlined) */}
                <motion.h2 
                    className="text-4xl md:text-7xl lg:text-8xl font-display font-bold tracking-[0.2em] text-transparent drop-shadow-[0_2px_rgba(255,255,255,0.3)] mb-8"
                    style={{ WebkitTextStroke: '2px rgba(255,230,0,0.5)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    KUMAR
                </motion.h2>

                {/* Tagline/Roles with Brackets */}
                <motion.div 
                    className="flex items-center gap-4 text-xl md:text-2xl text-[#ffe600] font-mono mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="opacity-70">{"<"}</span>
                    <TypeAnimation
                        sequence={personalInfo.roles.flatMap(role => [role, 2000])}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-bold tracking-wider"
                    />
                    <span className="opacity-70">{"/>"}</span>
                </motion.div>

                {/* Summary Description */}
                <motion.p 
                    className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    Turning ideas into real-life products. I build accessible, pixel-perfect, and performant web experiences.
                </motion.p>

                {/* Action Buttons */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-6 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <a 
                        href="/resume.pdf" 
                        target="_blank"
                        className="flex items-center gap-2 bg-[#ffcc00] hover:bg-[#e6b800] text-black px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105"
                    >
                        Resume <FaDownload className="text-sm" />
                    </a>
                    <a 
                        href="/contact"
                        className="flex items-center gap-2 border border-white/20 hover:border-[#ffcc00] hover:text-[#ffcc00] text-white px-10 py-4 rounded-full font-bold transition-all"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                    className="flex gap-6 text-gray-400 hover:text-white transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                >
                    <a href={personalInfo.socials.github} target="_blank" className="hover:text-[#ffcc00] transition-colors"><FaGithub size={24} /></a>
                    <a href={personalInfo.socials.linkedin} target="_blank" className="hover:text-[#ffcc00] transition-colors"><FaLinkedinIn size={24} /></a>
                    <a href={personalInfo.socials.twitter} target="_blank" className="hover:text-[#ffcc00] transition-colors"><FaTwitter size={24} /></a>
                    <a href={personalInfo.socials.youtube} target="_blank" className="hover:text-[#ffcc00] transition-colors"><FaYoutube size={24} /></a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
            >
                <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <FaArrowDown className="text-[#ffcc00]" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Home;
