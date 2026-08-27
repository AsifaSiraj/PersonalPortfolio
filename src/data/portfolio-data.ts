export const personalInfo = {
  name: "Asifa Siraj",
  title: "Frontend Developer & Creative Technologist",
  tagline: "Crafting immersive digital experiences with code and creativity",
  email: "as1615533@gmail.com",
  location: "Karachi, Pakistan",
  github: "https://github.com/AsifaSiraj",
  linkedin: "https://www.linkedin.com/in/asifa-siraj-7baa40272/",
  bio: `I'm a passionate Frontend Developer and Computer Science student at NED University, Karachi. I specialize in building interactive, accessible, and visually stunning web experiences. With expertise spanning React, and modern web technologies, I bring ideas to life through code. My journey includes VR development, digital accessibility, and creative frontend projects that push the boundaries of what's possible on the web.`,
};

export interface Experience {
  id: number;
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  mode: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
    {
    id: 1,
    role: "Digital IC Design & Verification Trainee",
    company: "NED University of Engineering & Technology",
    type: "Training Program",
    period: "2025 - Present",
    duration: "Ongoing",
    location: "Karachi, Pakistan",
    mode: "On-site",
    description:
      "Undergoing hands-on training in Digital IC Design and Verification with a focus on RTL design, SystemVerilog, FPGA development, RISC-V architecture, AMBA protocols, assertions, and functional verification. Developing and verifying digital hardware designs using industry-standard EDA tools including QuestaSim, ModelSim, and Intel Quartus Prime.",
    skills: [
      "Digital IC Design",
      "RTL Design",
      "SystemVerilog",
      "Verilog",
      "Functional Verification",
      "UVM",
      "RISC-V",
      "AMBA Protocols",
      "Assertions",
      "FPGA",
      "QuestaSim",
      "ModelSim",
      "Quartus Prime"
    ],
  },
  {
    id: 2,
    role: "Virtual Office Assistant",
    company: "DesertBIM",
    type: "Freelance",
    period: "Aug 2025 - Dec 2025",
    duration: "5 mos",
    location: "Remote",
    mode: "Remote",
    description:
      "Provided comprehensive administrative and organizational support to clients, ensuring smooth day-to-day operations and efficient workflow management. Responsibilities included calendar coordination, research, documentation, and team communication to help streamline business processes and enhance productivity.",
    skills: ["Team Coordination", "Team Management", "Time Management", "Virtual Assistance", "Documentation", "Research Skills", "Communication"],
  },
  {
    id: 3,
    role: "Digital Accessibility Intern",
    company: "Deserts Digital O\u00dc",
    type: "Internship",
    period: "Jul 2025 - Dec 2025",
    duration: "6 mos",
    location: "Remote",
    mode: "Remote",
    description:
      "Responsible for supporting web and PDF accessibility compliance, conducting accessibility audits, assisting with outreach to prospects, supporting business development in assigned regions, and coordinating efforts to help close deals.",
    skills: ["SEO", "UX", "Accessible PDF Creation", "PDF Accessibility", "Web Development"],
  },
  {
    id: 4,
    role: "Summer Intern",
    company: "CodeAlpha",
    type: "Internship",
    period: "Jun 2025 - Jul 2025",
    duration: "2 mos",
    location: "Remote",
    mode: "Remote",
    description:
      "Designed and developed visually appealing, user-friendly, and responsive web applications using HTML, CSS, JavaScript, and frontend frameworks like React, Angular, or Vue.js. Collaborated with designers and backend teams to deliver seamless user experiences.",
    skills: ["React", "Angular", "Vue.js", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    role: "IT Support Staff",
    company: "Karachi Development Authority (KDA)",
    type: "Internship",
    period: "Mar 2025",
    duration: "1 mo",
    location: "Karachi, Sindh, Pakistan",
    mode: "On-site",
    description:
      "Explored different sectors of the IT department, gaining practical exposure to system management, software maintenance, and web development processes.",
    skills: ["IT Infrastructure", "IT Service Management", "Technical Support"],
  },
  {
    id: 6,
    role: "Frontend Web Developer",
    company: "NED University",
    type: "Internship",
    period: "Jan 2025 - Mar 2025",
    duration: "3 mos",
    location: "Karachi, Sindh, Pakistan",
    mode: "Hybrid",
    description:
      "Worked on the DIL Service Portal, diving deep into front-end technologies, refining skills in building user-friendly and efficient web interfaces. Gained hands-on exposure to real-world development challenges, enhancing both technical expertise and problem-solving abilities.",
    skills: ["Front-End Development", "React", "JavaScript"],
  },
  {
    id: 7,
    role: "Frontend Developer",
    company: "Interns School",
    type: "Internship",
    period: "Dec 2024 - Jan 2025",
    duration: "2 mos",
    location: "Remote",
    mode: "Remote",
    description:
      "Completed a 1-month internship in Frontend Development. Key projects included developing a web app for COVID-19 testing, enhancing skills in responsive design and UI development. Created a personal portfolio website using WordPress, showcasing CMS and theme customization abilities.",
    skills: ["Front-End Development", "WordPress", "jQuery"],
  },
  {
    id: 8,
    role: "VR Development Intern",
    company: "NED University VR Center",
    type: "Apprenticeship",
    period: "Sep 2024 - Nov 2024",
    duration: "3 mos",
    location: "Karachi, Sindh, Pakistan",
    mode: "Hybrid",
    description:
      "Completed an Apprenticeship in Virtual Reality with immersive learning, innovative projects, and an amazing team. Gained hands-on experience in VR development using Unity and Blender.",
    skills: ["Virtual Reality", "Blender", "Unity"],
  },
];

export interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  github: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Pointrix",
    description:
      "Real-time university bus tracking and management application developed as a Final Year Design Project at NED University. Contributed to the Flutter-based Student Panel by implementing navigation and routing and integrating frontend components with backend APIs for real-time data communication and interaction.",
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "ASP.NET Core",
      "C#",
      "REST APIs",
      "SignalR",
      "MySQL",
      "Google Maps API",
      "GPS"
    ],
    github: "",
    featured: true,
  },
  {
    id: 2,
    name: "Noor - Islamic Web App",
    description: "Comprehensive Islamic web application for prayer times, Qibla direction, Quran reading, Zikr tracking, and smart schedule planning.",
    tech: ["TypeScript", "Next.js", "Web APIs"],
    github: "https://github.com/AsifaSiraj/Noor",
    featured: true,
  },
  {
    id: 3,
    name: "Hospital Recommendation Chatbot",
    description:
      "NLP-powered hospital recommendation chatbot that helps users find suitable hospitals based on medical specialization, location, and budget. Supports natural language and voice queries, using NLP processing, fuzzy matching, multi-criteria filtering, speech recognition, and text-to-speech for an interactive user experience.",
    tech: [
      "Python",
      "Flask",
      "React",
      "NLP",
      "NLTK",
      "FuzzyWuzzy",
      "Transformers",
      "Wav2Vec 2.0",
      "Beautiful Soup",
      "gTTS",
      "pyttsx3"
    ],
    github: "https://github.com/AsifaSiraj/Hospital-Recommendation-ChatBot",
    featured: true,
  },
  {
    id: 4,
    name: "Library Management System",
    description: "Full-stack library management system with JSX, featuring book tracking, user management, and lending workflows.",
    tech: ["React.js", "Express.js", "MySQL"],
    github: "https://github.com/AsifaSiraj/Library-Management-System-JSX",
    featured: true,
  },
  {
    id: 5,
    name: "ReqMind AI",
    description: "AI-powered requirement analysis system built for HEC Generative AI Training Hackathon. Uses LLMs to extract functional and non-functional requirements.",
    tech: ["Python", "AI/ML", "NLP"],
    github: "https://github.com/AsifaSiraj/ReqMind-AI",
    featured: true,
  },
  {
    id: 6,
    name: "Sales Dashboard",
    description: "Interactive sales data visualization dashboard with real-time analytics and reporting features.",
    tech: ["TypeScript", "Data Visualization"],
    github: "https://github.com/AsifaSiraj/sales-dashboard",
    featured: true,
  },
  {
    id: 7,
    name: "DocSmith",
    description: "Document processing and management tool with intelligent features.",
    tech: ["TypeScript", "Web Development"],
    github: "https://github.com/AsifaSiraj/DocSmith",
    featured: true,
  },
  {
    id: 8,
    name: "COVID-19 Testing App",
    description: "Web application for COVID-19 testing with responsive design and user-friendly interface.",
    tech: ["HTML5", "CSS", "JavaScript"],
    github: "https://github.com/AsifaSiraj/Covid19-App",
    featured: false,
  },
  {
    id: 9,
    name: "Hospital Management System",
    description: "Object-oriented hospital management system built with C++ for patient records, appointments, and billing.",
    tech: ["C++", "OOP"],
    github: "https://github.com/AsifaSiraj/Hospital-management-system",
    featured: false,
  },
  {
    id: 10,
    name: "Unity Forest Scene",
    description: "Immersive 3D forest environment built with Unity using Universal Rendering Pipeline.",
    tech: ["Unity", "C#", "URP"],
    github: "https://github.com/AsifaSiraj/Forest",
    featured: false,
  },
  {
    id: 11,
    name: "Excavator VR",
    description: "Virtual Reality excavator simulation project with realistic controls and 3D modeling.",
    tech: ["Unity", "VR", "Blender"],
    github: "https://github.com/AsifaSiraj/Excavator",
    featured: false,
  },
  {
    id: 12,
    name: "Tic Tac Toe AI",
    description: "Python-based Tic-Tac-Toe game showcasing AI through game theory algorithms.",
    tech: ["Python", "AI", "Game Theory"],
    github: "https://github.com/AsifaSiraj/TIK-TAK-TOE",
    featured: false,
  },
  {
    id: 13,
    name: "Path Game",
    description: "Interactive path-finding game built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AsifaSiraj/Path-Game",
    featured: false,
  },
  {
    id: 14,
    name: "Financial Tracking Website",
    description: "Financial tracking website implementing greedy and dynamic programming algorithms.",
    tech: ["JavaScript", "Algorithms"],
    github: "https://github.com/AsifaSiraj/Financial-Tracking-Website",
    featured: false,
  },
];

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade?: string;
}

export const education: Education[] = [
  {
    id: 1,
    institution: "NED University of Engineering and Technology",
    degree: "Bachelor of Science (BS)",
    field: "Computer Science and Information Technology",
    period: "Sep 2022 \u2013 Sep 2027",
  },
  {
    id: 2,
    institution: "Sir Syed Govt Girl's College",
    degree: "Intermediate",
    field: "Pre-Engineering",
    period: "Jul 2020 \u2013 Apr 2022",
    grade: "A+",
  },
  {
    id: 3,
    institution: "High Star Public Sec School",
    degree: "Matriculation",
    field: "Computer Science",
    period: "Mar 2015 \u2013 Mar 2020",
    grade: "A+",
  },
];

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date?: string;
  skills?: string[];
}

export const certifications: Certification[] = [
  { id: 1, name: "Generative AI Application Developer", issuer: "HEC Pakistan" },
  { id: 2, name: "Google Analytics Certification", issuer: "Google Skillshop", date: "Apr 2025" },
  { id: 3, name: "Frontend Internship Certificate", issuer: "Interns School", date: "Dec 2024" },
  { id: 4, name: "Web Development", issuer: "Coursera", skills: ["HTML", "CSS", "JavaScript"] },
  { id: 5, name: "SQL Basic", issuer: "LeetCode", skills: ["SQL"] },
  { id: 6, name: "Unity Essential Basic Course", issuer: "Unity" },
  { id: 7, name: "Basic Angular Development", issuer: "NED University" },
  { id: 8, name: "Social Media Marketing", issuer: "Kshitiksha Foundation", skills: ["Social Media Marketing"] },
  { id: 9, name: "Content Writing", issuer: "Kshitiksha Foundation", skills: ["Web Content Writing"] },
  { id: 10, name: "React and JavaScript Basics", issuer: "Udemy", date: "Mar 2024", skills: ["React"] },
  { id: 11, name: "Python Fundamentals", issuer: "Great Learning", date: "Sep 2023" },
  { id: 12, name: "HTML, CSS, JavaScript for Web Development", issuer: "Coursera", date: "Sep 2023", skills: ["JavaScript", "HTML", "CSS"] },
  { id: 13, name: "Fundamentals of Digital Marketing", issuer: "Google", date: "Aug 2023", skills: ["Digital Marketing"] },
];

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: 75 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 60 },
      { name: "HTML/CSS", level: 95 },
      { name: "Next.js", level: 60 },
      { name: "Tailwind CSS", level: 80 },
      { name: "WordPress", level: 40 },
      { name: "jQuery", level: 60 },
    ],
  },
  {
    name: "Backend & Languages",
    skills: [
      { name: "Python", level: 75 },
      { name: "C++", level: 65 },
      { name: "C", level: 60 },
      { name: "SQL", level: 70 },
      { name: "Express.js", level: 40 },
      { name: "PHP", level: 55 },
    ],
  },
  {
    name: "Creative & 3D",
    skills: [
      { name: "Unity", level: 65 },
      { name: "Blender", level: 40 },
      { name: "VR Development", level: 65 },
      { name: "Digital Marketing", level: 60 },
    ],
  },
  {
    name: "Tools & Soft Skills",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "SEO", level: 65 },
      { name: "Accessibility", level: 70 },
      { name: "Team Management", level: 80 },
      { name: "Communication", level: 85 },
    ],
  },
];

// Chatbot Q&A data
export const chatbotQA = [
  {
    keywords: ["name", "who are you", "introduce", "about you", "tell me about"],
    answer:
      "I'm Asifa Siraj, a passionate Frontend Developer and Computer Science student at NED University, Karachi. I specialize in building interactive, accessible, and visually stunning web experiences!",
  },
  {
    keywords: ["experience", "work", "job", "career", "employment"],
    answer:
      "I've worked as a Virtual Office Assistant at DesertBIM, Digital Accessibility Intern at Deserts Digital, Summer Intern at CodeAlpha, IT Support Staff at KDA, Frontend Developer at NED University and Interns School, and VR Development Intern at NED University VR Center. That's 7 diverse experiences!",
  },
  {
    keywords: ["education", "university", "degree", "study", "ned", "college", "school"],
    answer:
      "I'm currently pursuing my BS in Computer Science and Information Technology at NED University of Engineering and Technology (Sep 2022 - Sep 2027). I completed my Intermediate in Pre-Engineering with A+ grade from Sir Syed Govt Girl's College, and my Matriculation in Computer Science with A+ grade from High Star Public Sec School.",
  },
  {
    keywords: ["skill", "tech", "technology", "stack", "programming", "language", "know"],
    answer:
      "My key skills include React.js, JavaScript, TypeScript, HTML/CSS, Next.js, Tailwind CSS, Three.js, Python, C++, SQL, Unity, and Blender. I'm also skilled in SEO, digital accessibility, team management, and communication!",
  },
  {
    keywords: ["project", "github", "portfolio", "built", "created", "develop"],
    answer:
      "Some of my featured projects include ReqMind AI (AI-powered requirement analysis), Noor (Islamic web app), Sales Dashboard, DocSmith, and Library Management System. You can find all my projects on my GitHub! Check the Projects section for links.",
  },
  {
    keywords: ["vr", "virtual reality", "unity", "blender", "3d"],
    answer:
      "I completed a VR Development Apprenticeship at NED University VR Center (Sep-Nov 2024). I've built projects like a Unity Forest Scene and an Excavator VR simulation. I'm skilled in Unity, Blender, and VR development with the Universal Rendering Pipeline.",
  },
  {
    keywords: ["certification", "certificate", "coursera", "google", "udemy", "hef", "hec"],
    answer:
      "I hold certifications from HEC Pakistan (Generative AI), Google (Analytics, Digital Marketing), Coursera (Web Development), LeetCode (SQL), Unity, and Udemy (React), among others. I have 13+ certifications in total!",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "connect", "linkedin", "social"],
    answer:
      "You can reach me through my GitHub (github.com/AsifaSiraj) or LinkedIn. Feel free to connect! I'm always open to new opportunities and collaborations.",
  },
  {
    keywords: ["resume", "cv", "download", "hire me"],
    answer:
      "You can download my resume by clicking the 'Download Resume' button in the navigation bar! It contains all my experience, education, and skills in detail.",
  },
  {
    keywords: ["desertbim", "virtual assistant", "virtual office"],
    answer:
      "As a Virtual Office Assistant at DesertBIM (Aug-Dec 2025, Freelance), I provided comprehensive administrative support including calendar coordination, research, documentation, and team communication to streamline business processes.",
  },
  {
    keywords: ["deserts digital", "accessibility", "digital accessibility"],
    answer:
      "At Deserts Digital O\u00dc (Jul-Dec 2025), I supported web and PDF accessibility compliance, conducted accessibility audits, assisted with outreach, and supported business development in assigned regions.",
  },
  {
    keywords: ["codealpha", "summer intern"],
    answer:
      "At CodeAlpha (Jun-Jul 2025), I designed and developed responsive web applications using HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js, collaborating with designers and backend teams.",
  },
  {
    keywords: ["hello", "hi", "hey", "greetings", "good", "morning", "evening", "afternoon"],
    answer:
      "Hello! I'm Byte, Asifa's portfolio assistant! I can tell you about her experience, education, skills, projects, and certifications. What would you like to know?",
  },
  {
    keywords: ["thank", "thanks", "bye", "goodbye", "see you"],
    answer:
      "You're welcome! Feel free to come back anytime. Don't forget to check out Asifa's projects on GitHub and download her resume. Have a great day!",
  },
];

export const defaultChatResponse =
  "I'm not sure about that, but I can tell you about Asifa's experience, education, skills, projects, certifications, or how to contact her. Just ask!";

