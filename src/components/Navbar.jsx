import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../data';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-colors duration-300 h-20 flex items-center ${
                scrolled ? 'bg-[#030712]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <NavLink
                            to="/"
                            className="flex items-center justify-center w-10 h-10 bg-cyan-500 text-[#030712] font-display font-bold text-xl rounded-full group shrink-0 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-shadow"
                        >
                            sk
                        </NavLink>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <NavLink
                                key={link.id}
                                to={`/${link.id}`}
                                className={({ isActive }) => `
                                    text-sm font-medium tracking-wider uppercase transition-colors relative group py-2
                                    ${isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}
                                `}
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.label}
                                        <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 transform origin-left transition-transform duration-300
                                            ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                                        `}></span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Connect Button (Desktop) */}
                    <div className="hidden md:block shrink-0">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <NavLink
                                to="/contact"
                                className="bg-transparent border border-cyan-500/50 text-cyan-400 px-6 py-2.5 rounded-full text-sm font-medium 
                                           hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                            >
                                Connect
                            </NavLink>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center shrink-0">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#030712]/95 backdrop-blur-lg border-b border-white/10"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map(link => (
                                <NavLink
                                    key={link.id}
                                    to={`/${link.id}`}
                                    className={({ isActive }) => `
                                        block px-3 py-4 text-base font-medium tracking-wide border-b border-white/5
                                        ${isActive ? 'text-cyan-400 bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}
                                    `}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <div className="pt-4">
                                <NavLink
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 px-6 py-3 rounded-md font-medium"
                                >
                                    Connect
                                </NavLink>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
