import React from 'react'
import {Github, Linkedin, Menu} from 'lucide-react'
// About Me
// Skills
// Hobbies & Interests
// Passions
// Academic Background
// Work Experience (if applicable)
// Certifications (if applicable)

const MySite = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navigation = [
        {name: 'About Me', href: '#aboutme'},
        {name: 'Skills', href: '#skills'},
        {name: 'Hobbies & Interests', href: '#hobbs'},
        {name: 'Passions', href: '#pass'},
        {name: 'Academic Background', href: '#acad'},
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
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
          {/* Navigation */}
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <span className="text-xl font-bold">Your Name</span>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
    
                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {/* {isMenuOpen ? <X size={24} /> : <Menu size={24} />} */}
                  </button>
                </div>
              </div>
            </div>
    
            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>
    
          {/* Hero Section */}
          <section id="home" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  Welcome to My Portfolio
                </h1>
                <p className="mt-3 text-xl text-gray-500">
                  I'm a developer passionate about building amazing web experiences
                </p>
              </div>
            </div>
          </section>
    
          {/* About Section */}
          <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
              <div className="mt-6 text-gray-600">
                <p>Your personal bio and experience goes here.</p>
              </div>
            </div>
          </section>
    
          {/* Projects Section */}
          <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
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
    
          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
              <div className="mt-6 flex justify-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Linkedin size={24} />
                </a>
                {/* <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Mail size={24} />
                </a> */}
              </div>
            </div>
          </section>
        </div>
      );
    };
    

export default MySite;

