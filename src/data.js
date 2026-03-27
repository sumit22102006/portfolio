// Portfolio Data - All content is centralized here for easy updates

export const personalInfo = {
  name: "Sumit Kumar",
  greeting: "Hello ",
  roles: ["Full-Stack Developer", "MERN Stack Specialist", "UI/UX Designer"],
  summary: "I am a passionate Computer Engineering student with a deep love for coding and building real-world applications.",
  email: "sumit.m.kumar.cg@gmail.com",
  phone: "+91 8809839939",
  location: "Bhagalpur, Bihar",
  socials: {
    github: "https://github.com/sumit22102006",
    linkedin: "https://www.linkedin.com/in/sumit-kumar-1977023a1",
    twitter: "#",
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
    title: "Spotify Clone",
    description: "A fully responsive music platform UI clone featuring modern design, playlist management, and audio player interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sumit22102006",
    liveDemo: "#",
    image: "spotify",
  },
  {
    id: 2,
    title: "Microsoft Clone",
    description: "A responsive website clone of Microsoft's homepage with accurate styling, navigation, and modern UI components.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sumit22102006",
    liveDemo: "#",
    image: "microsoft",
  },
  {
    id: 3,
    title: "Adobe Clone",
    description: "A stunning landing page recreation of Adobe's website showcasing modern frontend development techniques.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sumit22102006",
    liveDemo: "#",
    image: "adobe",
  },
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
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
