import { personalInfo } from '../data';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} <span className="text-white font-medium">{personalInfo.name}</span>. 
                    Built with <span className="text-[#ffcc00]">React</span> & <span className="text-[#ffcc00]">Tailwind CSS</span>
                </p>
                <div className="mt-4 flex justify-center flex-wrap gap-6">
                    <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#ffcc00] transition-colors text-xs uppercase tracking-widest font-bold">GitHub</a>
                    <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#ffcc00] transition-colors text-xs uppercase tracking-widest font-bold">LinkedIn</a>
                    <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#ffcc00] transition-colors text-xs uppercase tracking-widest font-bold">Twitter</a>
                    <a href={personalInfo.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#ffcc00] transition-colors text-xs uppercase tracking-widest font-bold">YouTube</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
