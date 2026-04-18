// Portfolio Data - All content is centralized here for easy updates

export const personalInfo = {
  name: "Sumit Kumar",
  greeting: "Hello ",
  roles: ["Full-Stack Developer", "MERN Stack Specialist", "UI/UX Designer"],
  summary: "I am a passionate Computer Engineering student with a deep love for coding and building real-world applications. Specialized in crafting high-performance web experiences with the MERN stack (MongoDB, Express, React, Node.js), I bridge the gap between design and functionality to deliver impactful digital solutions. Currently focused on mastering modern web architectures and creating user-centric applications that solve real-world challenges. Beyond my technical skills, I am a lifelong learner committed to writing clean, scalable code and contributing to innovative projects that make a difference. My goal is to build software that is not only functional but also intuitive and visually compelling. With extensive experience in cloning and building responsive UI's for global brands, I bring a detail-oriented approach to every challenge I undertake. I am always looking for opportunities to collaborate on ambitious projects and push the boundaries of what's possible on the web.",
  email: "sumit.m.kumar.cg@gmail.com",
  phone: "+91 8809839939",
  location: "Bhagalpur, Bihar",
  socials: {
    github: "https://github.com/sumit22102006",
    linkedin: "https://www.linkedin.com/in/sumit-kumar-1977023a1",
    twitter: "https://x.com/SumitKumar36900",
    youtube: "https://www.youtube.com/@SumitKumar-2210M"
  }
};

export const aboutBio = `I am a passionate Computer Engineering student at Coding Gita X Swaminarayan University, Kalol, Ahmedabad, Gujarat. With a strong foundation from S.K.P Vidya Vihar, Mandroza, Bhagalpur, Bihar, I have developed a deep love for coding and problem-solving.

My journey in full-stack development has equipped me with skills in both frontend and backend technologies. I enjoy building real-world applications that solve meaningful problems and continuously strive to improve my craft.`;

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering - Computer Engineering",
    institution: "Coding Gita X Swaminarayan University",
    location: "Kalol, Ahmedabad, Gujarat",
    period: "Currently Pursuing",
    status: "ongoing",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "S.K.P Vidya Vihar",
    location: "Mandroza, Bhagalpur, Bihar",
    period: "Completed",
    status: "completed",
  },
];

export const technicalSkills = [
  { name: "HTML", icon: "html5", level: 90 },
  { name: "CSS", icon: "css3", level: 85 },
  { name: "JavaScript", icon: "javascript", level: 80 },
  { name: "React.js", icon: "react", level: 75 },
  { name: "MongoDB", icon: "mongodb", level: 70 },
  { name: "C", icon: "c", level: 75 },
  { name: "C++", icon: "cplusplus", level: 70 },
  { name: "Git & GitHub", icon: "github", level: 80 },
];

export const designSkills = [
  { name: "Figma", icon: "figma", level: 75 },
  { name: "UI/UX Design", icon: "design", level: 70 },
];

export const projects = [
  {
    id: 1,
    title: "AgriSaar",
    category: "Full Stack Application",
    description: "A comprehensive agricultural platform designed to empower farmers with market insights, bio-fertilizer recommendations, AI voice assistant features, and community networking.",
    techStack: ["React", "FastAPI", "Node.js", "AI/ML"],
    github: "https://github.com/sumit22102006/AgriSaar",
    liveDemo: "https://agri-saar-s.vercel.app/",
    image: "agrisaar",
  },
  {
    id: 2,
    title: "IRCTC One",
    category: "Full Stack Application",
    description: "A streamlined platform designed to simplify the ticket booking and travel management experience for railway users. Focused on real-time updates.",
    techStack: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/sumit22102006",
    liveDemo: "https://irctc-one.vercel.app/",
    youtube: "https://youtu.be/z-h_7Y1rNqY?si=z8yXpTUKZshjK8rY",
    image: "irctc",
  },
  {
    id: 3,
    title: "Spotify Clone",
    category: "Clone",
    description: "A fully responsive music platform UI clone featuring modern design, playlist management, and audio player interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sumit22102006",
    liveDemo: "#",
    image: "spotify",
  },
  {
    id: 4,
    title: "Microsoft Clone",
    category: "Clone",
    description: "A responsive website clone of Microsoft's homepage with accurate styling, navigation, and modern UI components.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sumit22102006",
    liveDemo: "#",
    image: "microsoft",
  },
  {
    id: 5,
    title: "Adobe Clone",
    category: "Clone",
    description: "A stunning landing page recreation of Adobe's website showcasing modern frontend development techniques.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sumit22102006",
    liveDemo: "https://adobe-ashen.vercel.app/",
    youtube: "https://youtu.be/srMtrTuJAZM?si=T5X_V5WAhRyjQO4T",
    image: "adobe",
  },
  {
    id: 6,
    title: "Snake Game",
    category: "Games",
    description: "A classic retro snake game built with pure JavaScript and HTML5 Canvas, featuring smooth controls and score tracking.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sumit22102006",
    liveDemo: "#",
    image: "games",
  },
  {
    id: 7,
    title: "Modern Portfolio",
    category: "Frontend Projects",
    description: "A high-performance personal portfolio built with React, Framer Motion, and Tailwind CSS, featuring advanced animations.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/sumit22102006",
    liveDemo: "#",
    image: "frontend",
  },
];

export const hackathons = [
  {
    id: 1,
    title: "AgriSaar",
    type: "offline",
    description: "A comprehensive agricultural platform designed to empower farmers with market insights, bio-fertilizer recommendations, AI voice assistant features, and community networking. Built during an intensive hackathon to solve real-world farming challenges.",
    techStack: ["React", "FastAPI", "Node.js", "AI/ML"],
    github: "https://github.com/sumit22102006/AgriSaar",
    liveDemo: "https://agri-saar-s.vercel.app/",
    image: "agrisaar",
    award: "Hackathon Entry",
    features: [
      "AI Voice Assistant for guided tours",
      "Real-time Market Insights",
    ]
  },
  {
    id: 2,
    title: "IRCTC One",
    type: "online",
    description: "A streamlined platform designed to simplify the ticket booking and travel management experience for railway users. Focused on real-time updates and seamless user interface.",
    techStack: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/sumit22102006",
    liveDemo: "https://irctc-one.vercel.app/",
    youtube: "https://youtu.be/z-h_7Y1rNqY?si=z8yXpTUKZshjK8rY",
    image: "irctc",
    award: "Hackathon Project",
    features: [
      "Live PNR Status",
      "Seamless Booking Interface",
    ]
  }
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive, high-performance websites using modern technologies and best practices.",
    icon: "web",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Creating intuitive, user-centered designs that enhance user experience and engagement.",
    icon: "design",
  },
  {
    id: 3,
    title: "Frontend Development",
    description: "Crafting beautiful, interactive user interfaces with React.js and modern CSS frameworks.",
    icon: "frontend",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "End-to-end application development from database design to frontend implementation.",
    icon: "fullstack",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "hackathon", label: "Hackathons" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
