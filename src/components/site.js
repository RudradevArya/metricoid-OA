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
        <div className=''>
            <nav className=''>
                <div className=''>
                    <div className=''>
                        <div className=''>
                            <span className=''>
                                Rudradev Arya
                            </span>
                        </div>

                        <div className=''>
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className=''>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        
                        {/* hero */}
                        <section id='' className=''>
                            <div className=''>
                                <h1 className=''>
                                    Welcome to My Site
                                </h1>

                                <p className=''>
                                    A backend focused dev
                                </p>
                            </div>
                        </section>

                        <section id='' className=''>
                            <div className=''>
                                lorem
                            </div>
                        </section>
                        
                        {/* projects */}
                        <section id='' className=''>
                            <div className=''>
                                <div className=''>
                                     {projects.map((projects, index) => ( 
                                        <span className=''>
                                            {tech}
                                        </span>
                                    ))} 
                                </div>
                            </div>
                        </section>
                        
                        {/* constact */}
                        <section id='' className=''>
                            <div className=''>
                                <h2 className=''>
                                    COntact
                                </h2>
                                <a href='#'>
                                    <Github/>
                                    
                                </a>
                                
                            </div>
                            

                        </section>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MySite;

