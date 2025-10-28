import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Smartphone, Sparkles, ArrowRight, Menu, X, Briefcase, Award, Plane } from 'lucide-react';
import resume from "./assets/resume_harshit.pdf";

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => { setScrolled(window.scrollY > 50); };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const projects = [
        {
            title: "Flight Modes",
            description: "Flight management web app with seamless UI, REST API integration, Redux state management, multi-language support, and multi-color theming. Optimized for performance and scalability.",
            tech: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS"],
            gradient: "from-blue-600 to-cyan-600",
            icon: <Plane className="w-6 h-6" />,
            link: "#"
        },
        {
            title: "Matrimonial Platform (Nek-Rishta)",
            description: "Modern matrimony site with reusable components, localization, multi-theme customization, secure auth, and consistent design logic.",
            tech: ["Next.js", "React", "Tailwind CSS"],
            gradient: "from-emerald-600 to-teal-600",
            icon: <Palette className="w-6 h-6" />,
            link: "#"
        },
        {
            title: "ICE-BET Sports Betting",
            description: "Interactive betting platform with adaptive UI, multi-theme/language options, accessible navigation, and modular, maintainable architecture.",
            tech: ["React.js", "Tailwind CSS"],
            gradient: "from-indigo-600 to-blue-600",
            icon: <Sparkles className="w-6 h-6" />,
            link: "#"
        },
        {
            title: "IA-MEET-YOU",
            description: "Dating app with real-time chat, profile management, multi-theme support, and responsive design. Built with modular components for scalability.",
            tech: ["Next JS", "React", "Tailwind CSS"],
            gradient: "from-indigo-600 to-yellow-600",
            icon: <Sparkles className="w-6 h-6" />,
            link: "#"
        },
        {
            title: "ESG Compliance Platform",
            description: "Web platform for ESG compliance tracking with dynamic dashboards, data visualization, multi-theme support, and responsive design. Built for scalability and maintainability.",
            tech: ["React JS", "Apex Charts", "Tailwind CSS"],
            gradient: "from-green-600 to-blue-600",
            icon: <Sparkles className="w-6 h-6" />,
            link: "#"
        }
    ];

    const skills = [
        {
            category: "Frontend",
            items: [
                { name: "React.js", level: 95, icon: "⚛️" },
                { name: "Next.js", level: 90, icon: "▲" },
                { name: "JavaScript (ES6+)", level: 95, icon: "🟨" },
                { name: "TypeScript", level: 80, icon: "🔷" },
                { name: "HTML5 & CSS3", level: 95, icon: "🎨" }
            ]
        },
        {
            category: "Styling & UI",
            items: [
                { name: "Tailwind CSS", level: 95, icon: "💨" },
                { name: "Bootstrap", level: 90, icon: "🎀" },
                { name: "Responsive Design", level: 92, icon: "📱" }
            ]
        },
        {
            category: "State Management",
            items: [
                { name: "Redux Toolkit", level: 85, icon: "🔮" },
                { name: "Context API", level: 100, icon: "🔮" },
                { name: "Zustand", level: 60, icon: "🔮" }

            ]
        },
        {
            category: "Tools",
            items: [
                { name: "Git", level: 92, icon: "🐙" },
                { name: "Figma", level: 85, icon: "🎨" },
                { name: "Postman", level: 82, icon: "📬" },
                { name: "VS Code", level: 85, icon: "📝" }
            ]
        },
        {
            category: "Concepts",
            items: [
                { name: "OOP", level: 80, icon: "🔷" },
                { name: "State Management", level: 85, icon: "🔗" },
                { name: "Functional Programming", level: 80, icon: "🔢" }
            ]
        }
    ];

    const experience = [
        {
            role: "Frontend Developer",
            company: "Websultanate Software Technologies Pvt Ltd",
            period: "April 2024 - Present",
            description: "Develop responsive web applications using React.js, ensuring optimal performance across devices and browsers. Create intuitive user interfaces with Tailwind CSS/Bootstrap for enhanced design consistency.",
            achievements: [
                "Implemented RESTful API integration for seamless data flow",
                "Built dynamic SPAs with React.js and component-based architecture",
                "Developed SSR apps using Next.js for SEO and performance",
                "Integrated 3rd-party APIs and handled async operations with error handling",
                "Optimized performance via code splitting, lazy loading, and bundle optimization",
                "Implemented Redux Toolkit for complex application state"
            ],
            gradient: "from-blue-600 to-cyan-600"
        },
        {
            role: "Associate Software Engineer",
            company: "Mphasis",
            period: "Nov 2023 - Mar 2024",
            description: "Completed intensive MERN stack training with hands-on full-stack development experience. Led team to develop and deploy live project applications successfully.",
            achievements: [
                "Applied problem-solving skills for high-quality solutions in a fast-paced environment"
            ],
            gradient: "from-slate-600 to-slate-700"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg ' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-slate-100 font-mono">
                            {"<Harshit Dubey />"}
                        </div>
                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setActiveSection(item.toLowerCase())}
                                    className={`transition-all duration-300 hover:text-cyan-400 ${activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-300'}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-slate-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 space-y-4 pb-4">
                            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => {
                                        setActiveSection(item.toLowerCase());
                                        setIsMenuOpen(false);
                                    }}
                                    className="block w-full text-left py-2 hover:text-cyan-400 text-slate-300"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center px-6 pt-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/20">
                                <Code2 className="w-16 h-16 text-white" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-100">
                            Frontend Developer
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
                            Frontend Developer specializing in React.js and Next.js with 2 years of experience building fast, responsive, and user-focused web applications through clean, maintainable code and performance-driven design. Currently based in Lucknow and open to new opportunities.
                        </p>
                        <div className="flex justify-center space-x-4 mb-12">
                            <a href="http://github.com/harshitdubey8" className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-all duration-300 hover:scale-110 shadow-lg" target="_blank" rel="noopener noreferrer">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/harshit-dubey-" className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-lg" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="mailto:hdlikes8@gmail.com" className="p-3 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-all duration-300 hover:scale-110 shadow-lg">
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                        <button
                            onClick={() => setActiveSection('about')}
                            className="group bg-cyan-600 hover:bg-cyan-500 px-8 py-4 rounded-lg font-semibold flex items-center mx-auto transition-all duration-300 shadow-lg shadow-cyan-600/30"
                        >
                            Learn More About Me
                            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </section>

                {/* About Section */}
                <section className="min-h-screen px-6 py-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">About Me</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto"></div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-xl">
                                    <h3 className="text-2xl font-bold mb-4 text-cyan-400">Professional Overview</h3>
                                    <p className="text-slate-300 leading-relaxed mb-4">
                                        Frontend Developer specializing in React.js and Next.js with 2 years of experience building fast, responsive, and user-focused web applications. Passionate about crafting highly maintainable code and performance-driven UI.
                                    </p>
                                    <p className="text-slate-300 leading-relaxed mb-4">
                                        Adept with the entire React ecosystem, performance optimization techniques, and best practices. Always eager to learn the latest in web technology and design.
                                    </p>
                                    <p className="text-slate-300 leading-relaxed">
                                        Enjoys making complex problems simple, and collaborating within ambitious teams.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-600 transition-all shadow-lg">
                                    <div className="flex items-center mb-3">
                                        <Code2 className="w-6 h-6 text-cyan-400 mr-3" />
                                        <h4 className="text-xl font-semibold">Clean Code Advocate</h4>
                                    </div>
                                    <p className="text-slate-400">
                                        Maintains maintainable, scalable code following best practices and industry standards. Code reviews and testing are integral to workflow.
                                    </p>
                                </div>
                                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-600 transition-all shadow-lg">
                                    <div className="flex items-center mb-3">
                                        <Palette className="w-6 h-6 text-blue-400 mr-3" />
                                        <h4 className="text-xl font-semibold">Design-Minded Developer</h4>
                                    </div>
                                    <p className="text-slate-400">
                                        Bridges the gap between design and development, translating designs into accessible user experiences.
                                    </p>
                                </div>
                                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-emerald-600 transition-all shadow-lg">
                                    <div className="flex items-center mb-3">
                                        <Sparkles className="w-6 h-6 text-emerald-400 mr-3" />
                                        <h4 className="text-xl font-semibold">Continuous Learner</h4>
                                    </div>
                                    <p className="text-slate-400">
                                        Always learning new frameworks, tools, and trends to stay at the cutting edge of frontend.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="min-h-screen px-6 py-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">Work Experience</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto"></div>
                        </div>
                        <div className="space-y-8">
                            {experience.map((exp, index) => (
                                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-600 transition-all shadow-xl">
                                    <div className={`h-1.5 bg-gradient-to-r ${exp.gradient}`} />
                                    <div className="p-8">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-100 mb-2">{exp.role}</h3>
                                                <p className="text-xl text-cyan-400 flex items-center">
                                                    <Briefcase className="w-5 h-5 mr-2" />
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <div className="mt-2 md:mt-0">
                                                <span className="px-4 py-2 bg-slate-700/50 rounded-lg text-sm text-slate-300 font-mono">
                                                    {exp.period}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-100 mb-3 flex items-center">
                                                <Award className="w-5 h-5 mr-2 text-cyan-400" />
                                                Key Achievements
                                            </h4>
                                            <ul className="space-y-2">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                                                        <span className="text-slate-400">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="min-h-screen px-6 py-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">Featured Projects</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto"></div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-600 transition-all duration-300 hover:-translate-y-2 shadow-xl">
                                    <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-lg shadow-lg`}>
                                                {project.icon}
                                            </div>
                                            <a href={project.link} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-lg text-sm text-slate-300 border border-slate-600">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="min-h-screen px-6 py-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">Technical Skills</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto"></div>
                        </div>
                        <div className="space-y-12">
                            {skills.map((skillGroup, groupIndex) => (
                                <div key={groupIndex}>
                                    <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
                                        <div className="w-1.5 h-8 bg-gradient-to-b from-cyan-600 to-blue-600 rounded-full mr-3"></div>
                                        {skillGroup.category}
                                    </h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {skillGroup.items.map((skill, index) => (
                                            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-600 transition-all hover:-translate-y-1 shadow-lg">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center">
                                                        <span className="text-2xl mr-3">{skill.icon}</span>
                                                        <span className="font-semibold text-lg text-slate-100">{skill.name}</span>
                                                    </div>
                                                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                                                </div>
                                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full transition-all duration-1000"
                                                        style={{ width: `${skill.level}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <section className="min-h-[40vh] flex items-center justify-center px-6 py-20" id="resume">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
                                    My Resume
                                </h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mb-8"></div>
                                <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                                    Want to know more about my experience and background? You can download my latest resume right here!
                                </p>
                                <a
                                    href={resume}
                                    download={resume}
                                    className="inline-block bg-cyan-600 hover:bg-cyan-500 px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all duration-300 shadow-lg shadow-cyan-600/30"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </section>
                        <div className="mt-16 bg-slate-800/30 rounded-2xl p-8 border border-slate-700 shadow-xl">
                            <h3 className="text-2xl font-bold mb-4 text-center text-slate-100">Always Learning</h3>
                            <p className="text-slate-300 text-center max-w-3xl mx-auto">
                                Currently exploring the world of Generative AI, integrating AI-driven features into web experiences. Also deepening expertise in full stack development using Next.js—building robust, end-to-end applications and modern APIs. Passionate about leveraging new technologies to create more powerful, intelligent, and seamless web solutions.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Contact Section */}
                <section className="min-h-screen flex items-center justify-center px-6 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
                            Let's Connect
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mb-8"></div>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? I'd love to hear from you!
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <a href="http://github.com/harshitdubey8" className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-all hover:-translate-y-1 shadow-lg" target="_blank" rel="noopener noreferrer">
                                <Github className="w-8 h-8 mx-auto mb-3 text-slate-300" />
                                <div className="font-semibold text-slate-100">GitHub</div>
                                <div className="text-sm text-slate-400">@harshitdubey8</div>
                            </a>
                            <a href="https://www.linkedin.com/in/harshit-dubey-" className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:-translate-y-1 shadow-lg" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                                <div className="font-semibold text-slate-100">LinkedIn</div>
                                <div className="text-sm text-slate-400">/in/harshit-dubey-</div>
                            </a>
                            <a href="mailto:hdlikes8@gmail.com" className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all hover:-translate-y-1 shadow-lg">
                                <Mail className="w-8 h-8 mx-auto mb-3 text-emerald-400" />
                                <div className="font-semibold text-slate-100">Email</div>
                                <div className="text-sm text-slate-400">hdlikes8@gmail.com</div>
                            </a>
                        </div>
                        <button className="bg-cyan-600 hover:bg-cyan-500 px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-cyan-600/30">
                            Get In Touch
                        </button>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
                    <p>© 2025 Harshit Dubey. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
