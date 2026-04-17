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

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 h-24 flex items-center ${
                scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center relative">
                {/* Hexagon Logo */}
                <NavLink to="/" className="relative group">
                    <div className="w-12 h-14 bg-cyan-500 clip-hexagon flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                        <span className="text-[#0a0a0a] font-black text-xl tracking-tighter">SK</span>
                    </div>
                </NavLink>

                {/* Centered Desktop Navigation */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.id}
                            to={`/${link.id}`}
                            className={({ isActive }) => `
                                px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all rounded-full
                                ${isActive ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:text-white'}
                            `}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2"
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-24 left-0 w-full bg-[#0a0a0a] border-b border-white/10 py-8 flex flex-col items-center gap-6 md:hidden"
                        >
                            {navLinks.map(link => (
                                <NavLink
                                    key={link.id}
                                    to={`/${link.id}`}
                                    className={({ isActive }) => `
                                        text-lg font-bold uppercase tracking-widest
                                        ${isActive ? 'text-cyan-400' : 'text-gray-400'}
                                    `}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
