import React from 'react';
import { Github, Linkedin, Menu, X, BookOpen, Code, Heart, Briefcase, Award } from 'lucide-react';

const MySite = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('aboutme');

  const navigation = [
    { name: 'About Me', href: '#aboutme', icon: <BookOpen size={20} /> },
    { name: 'Skills', href: '#skills', icon: <Code size={20} /> },
    { name: 'Hobbies & Interests', href: '#hobbs', icon: <Heart size={20} /> },
    { name: 'Passions', href: '#pass', icon: <Heart size={20} /> },
    { name: 'Academic Background', href: '#acad', icon: <BookOpen size={20} /> },
    { name: 'Work Experience', href: '#work', icon: <Briefcase size={20} /> },
    { name: 'Certifications', href: '#cert', icon: <Award size={20} /> },
  ];

  const projects = [
    {
      title: 'EventU',
      desc: 'An event site for the university',
      tech: ['AppWrite', 'AWS', 'JS'],
    },
    {
      title: 'LambdaMailer',
      desc: 'A serverless microSaaS application to send bulk personalised emails',
      tech: ['AWS', 'JS'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Rudradev Arya
            </span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
                  onClick={() => setActiveSection(item.href.slice(1))}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50"
                  onClick={() => {
                    setActiveSection(item.href.slice(1));
                    setIsMenuOpen(false);
                  }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              A backend focused developer passionate about building scalable solutions
            </p>
          </div>
        </section>

        {/* About Me */}
        <section id="aboutme" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a backend developer with a passion for building scalable applications.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['JavaScript', 'AWS', 'Node.js', 'Python', 'Docker', 'MongoDB'].map((skill) => (
                <div key={skill} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hobbies & Interests */}
        <section id="hobbs" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Hobbies & Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Reading', 'Photography', 'Traveling', 'Gaming'].map((hobby) => (
                <div key={hobby} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">{hobby}</h3>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact</h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/RudradevArya/metricoid-OA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/rudradev-arya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MySite;