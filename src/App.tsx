import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBriefcase,
  FaArrowUp,
  FaHome,
  FaBrain,
  FaProjectDiagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserGraduate,
  FaDownload,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaPython,
  FaJava,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaFigma,
  FaCode,
  FaCodeBranch,
  FaServer,
  FaCloud,
  FaCheck,
  FaLayerGroup,
  FaRobot,
  FaCogs,
} from 'react-icons/fa';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'database' | 'tools' | 'languages';
  level: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

interface Education {
  school: string;
  degree: string;
  period: string;
  cgpa: string;
  details?: string[];
}

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'ai' | 'database' | 'tools' | 'languages'>('all');
  const [activeSection, setActiveSection] = useState('home');
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const rightScrollRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        'service_fvsmqnl', // Service ID from your EmailJS account
        'template_n4yit5v', // Replace with your actual Template ID
        formRef.current,
        {
          publicKey: 'fX83hx85dg8ZUTz-w', // Replace with your actual Public Key
        }
      )
      .then(
        () => {
          alert('Message successfully sent!');
          setIsSending(false);
          if (formRef.current) formRef.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send message, please try again.');
          setIsSending(false);
        }
      );
  };

  const skills: Skill[] = [
    { name: 'HTML5', category: 'frontend', level: '95%' },
    { name: 'CSS3', category: 'frontend', level: '95%' },
    { name: 'React', category: 'frontend', level: '85%' },
    { name: 'TypeScript', category: 'frontend', level: '80%' },
    { name: 'JavaScript', category: 'frontend', level: '90%' },
    { name: 'Python', category: 'languages', level: '95%' },
    { name: 'Java', category: 'languages', level: '90%' },
    { name: 'C++', category: 'languages', level: '80%' },
    { name: 'C', category: 'languages', level: '75%' },
    { name: 'Node.js', category: 'backend', level: '80%' },
    { name: 'FastAPI', category: 'backend', level: '85%' },
    { name: 'Flask', category: 'backend', level: '80%' },
    { name: 'REST APIs', category: 'backend', level: '90%' },
    { name: 'TensorFlow', category: 'ai', level: '90%' },
    { name: 'Keras', category: 'ai', level: '85%' },
    { name: 'Scikit-learn', category: 'ai', level: '90%' },
    { name: 'NLP', category: 'ai', level: '85%' },
    { name: 'CNN', category: 'ai', level: '90%' },
    { name: 'LSTM', category: 'ai', level: '80%' },
    { name: 'MediaPipe', category: 'ai', level: '85%' },
    { name: 'Whisper ASR', category: 'ai', level: '80%' },
    { name: 'MySQL', category: 'database', level: '85%' },
    { name: 'MongoDB', category: 'database', level: '80%' },
    { name: 'Firebase', category: 'database', level: '75%' },
    { name: 'Docker', category: 'tools', level: '80%' },
    { name: 'Git', category: 'tools', level: '90%' },
    { name: 'GitHub', category: 'tools', level: '90%' },
    { name: 'VS Code', category: 'tools', level: '95%' },
    { name: 'Figma', category: 'tools', level: '75%' },
    { name: 'Linux', category: 'tools', level: '85%' },
    { name: 'Cloud', category: 'tools', level: '75%' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Sign Language To Text Converter',
      description: 'Real-time sign language recognition using MediaPipe and Random Forest classifier with 94%+ accuracy.',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning'],
      image: '/sign_language_project.png',
      link: 'https://github.com/IrfanM-7/Sign-Language-To-Text-Converter',
    },
    {
      id: 2,
      title: 'Network Intrusion Detection System (NIDS)',
      description: 'CNN-LSTM based cybersecurity intrusion detection system using NSL-KDD dataset.',
      tags: ['Python', 'TensorFlow', 'CNN-LSTM', 'Security'],
      image: '/nids_project.png',
      link: 'https://github.com/IrfanM-7/Network-Intrusion-Detection-System-NIDS',
    },
    {
      id: 3,
      title: 'NagarVaani',
      description: 'Tamil AI communication ecosystem integrating chatbot, voicebot, Whisper ASR and NLP complaint classification.',
      tags: ['Python', 'NLP', 'Whisper ASR', 'AI', 'Chatbot'],
      image: '/nagarvaani_project.png',
      link: 'https://github.com/IrfanM-7/NagarVaani',
    },
    {
      id: 4,
      title: 'AgriConnect',
      description: 'Agricultural supply chain platform using React and Firebase for real-time intelligent matching.',
      tags: ['React', 'Firebase', 'Supply Chain', 'Real-time'],
      image: '/agriconnect_project.png',
      link: 'https://github.com/IrfanM-7/AgriConnect',
    },
    {
      id: 5,
      title: 'Sentiment Analysis using Stock Market News',
      description: 'Analyzing financial news to predict stock market trends and sentiment using NLP techniques.',
      tags: ['HTML', 'Python', 'NLP', 'Machine Learning'],
      image: '/sentiment_project.png',
      link: 'https://github.com/IrfanM-7/Sentiment-Analysis-using-stock-market-news'
    },
    {
      id: 6,
      title: 'Weather Forecasting',
      description: 'A responsive weather forecasting application providing real-time data and predictions.',
      tags: ['JavaScript', 'API', 'Frontend'],
      image: '/weather_project.svg',
      link: 'https://github.com/IrfanM-7/Weather-Forecasting'
    },
    {
      id: 7,
      title: 'AUTOMATED VIDEO EDITING AND HIGHLIGHT GENERATION',
      description: 'Intelligent video classification system to automatically edit and generate highlights from raw footage.',
      tags: ['Python', 'Computer Vision', 'Deep Learning'],
      image: '/video_project.svg',
      link: 'https://github.com/IrfanM-7/video-classification'
    },
    {
      id: 8,
      title: 'Compiler',
      description: 'Custom compiler implementation showcasing parsing, lexical analysis, and code generation.',
      tags: ['C/C++', 'System Programming', 'Compiler Design'],
      image: '/compiler_project.svg',
      link: 'https://github.com/IrfanM-7/Compiler'
    },
  ];

  const education: Education[] = [
    {
      school: 'SRM Institute of Science and Technology',
      degree: 'B.Tech CSE (AIML)',
      period: '2023 – 2027',
      cgpa: '8.00',
      details: ['Specialization in AI & Machine Learning', 'Relevant Coursework: Deep Learning, NLP, Computer Vision'],
    },
  ];

  const filteredSkills = activeCategory === 'all' ? skills : skills.filter((skill) => skill.category === activeCategory);

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'HTML5': return <FaHtml5 />;
      case 'CSS3': return <FaCss3Alt />;
      case 'React': return <FaReact />;
      case 'TypeScript': return <FaCode />;
      case 'JavaScript': return <FaJs />;
      case 'Python': return <FaPython />;
      case 'Java': return <FaJava />;
      case 'C++':
      case 'C':
        return <FaCode />;
      case 'Node.js': return <FaNodeJs />;
      case 'FastAPI':
      case 'Flask':
      case 'REST APIs':
        return <FaServer />;
      case 'TensorFlow':
      case 'Keras':
      case 'Scikit-learn':
      case 'NLP':
      case 'CNN':
      case 'LSTM':
      case 'MediaPipe':
      case 'Whisper ASR':
        return <FaBrain />;
      case 'MySQL':
      case 'MongoDB':
      case 'Firebase':
        return <FaDatabase />;
      case 'Docker': return <FaDocker />;
      case 'Git': return <FaGitAlt />;
      case 'GitHub': return <FaGithub />;
      case 'VS Code': return <FaCodeBranch />;
      case 'Figma': return <FaFigma />;
      case 'Linux': return <FaLinux />;
      case 'Cloud': return <FaCloud />;
      default: return <FaCode />;
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: isMobile ? null : rightScrollRef.current, threshold: 0.3 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const scrollContainer = rightScrollRef.current;
    const handleScroll = () => {
      const scrollBtn = document.querySelector('.scroll-to-top') as HTMLElement | null;
      if (!scrollBtn) return;
      
      const isMobile = window.innerWidth <= 1024;
      const scrollTop = isMobile ? window.scrollY : (scrollContainer?.scrollTop || 0);

      if (scrollTop > 320) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    if (window.innerWidth <= 1024) {
      const offset = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    } else {
      if (!rightScrollRef.current) return;
      const containerRect = rightScrollRef.current.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const offset = sectionRect.top - containerRect.top + rightScrollRef.current.scrollTop;
      rightScrollRef.current.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    if (window.innerWidth <= 1024) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (rightScrollRef.current) {
      rightScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getLeftPanelContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="left-content" key="home">
            <span className="left-greeting">👋 Hello</span>
            <p className="left-small-italic">I'm Syed Irfan</p>
            <h1 className="left-name-large">AI & ML<br />Engineer</h1>
          </div>
        );
      case 'education':
        return (
          <div className="left-content" key="education">
            <span className="left-small-italic">Education</span>
            <h1 className="left-name-large">My Academic<br />Journey</h1>
          </div>
        );
      case 'services':
        return (
          <div className="left-content" key="services">
            <span className="left-small-italic">My Services</span>
            <h1 className="left-name-large">What I do for<br />you</h1>
          </div>
        );
      case 'skills':
        return (
          <div className="left-content" key="skills">
            <span className="left-small-italic">Skills</span>
            <h1 className="left-name-large">What I bring<br />to the table</h1>
          </div>
        );
      case 'projects':
        return (
          <div className="left-content" key="projects">
            <span className="left-small-italic">Projects</span>
            <h1 className="left-name-large">My Creative<br />Works</h1>
          </div>
        );
      case 'contact':
        return (
          <div className="left-content" key="contact">
            <span className="left-small-italic">Contact Me</span>
            <h1 className="left-name-large">Let's Start A<br />New Project</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <aside className="left-panel">
        <div className="left-panel-content">
          {getLeftPanelContent()}
        </div>
      </aside>

      <div className="right-scroll" ref={rightScrollRef}>
        <main className="right-panel">
          <section id="home" data-section className="section hero-section">
            <div className="mobile-section-header">
              <span className="left-greeting">👋 Hello</span>
              <p className="left-small-italic">I'm Syed Irfan</p>
              <h1 className="left-name-large">AI & ML<br />Engineer</h1>
            </div>
            <div className="section-wrapper hero-wrapper">
              <div className="hero-layout">
                <div className="hero-left">
                  <div className="image-wrapper">
                    <img src="/profile.png" alt="Syed Irfan" />
                  </div>
                </div>
                <div className="hero-copy">
                  <h1 className="hero-main-title">AI & ML Engineer | Deep Learning Specialist | Building Intelligent Systems</h1>
                  <p className="hero-description">Passionate AI & ML Engineer with expertise in building intelligent systems, deep learning, computer vision, and NLP pipelines. Holding a B.Tech CSE (AIML) from SRM Institute of Science and Technology, I focus on delivering scalable, production-ready AI models and clean software architectures.</p>

                  <div className="hero-contact-list">
                    <p><FaMapMarkerAlt /> Tiruchirappalli, Tamil Nadu, India</p>
                    <p><FaEnvelope /> irfuijukas@gmail.com</p>
                    <p><FaPhoneAlt /> +91-8940742364</p>
                  </div>

                  <div className="hero-actions">
                    <div className="hero-social-row">
                      <a href="https://www.linkedin.com/in/syed-irfan-589b192ba/" target="_blank" rel="noreferrer" className="social-square linkedin" aria-label="LinkedIn"><FaLinkedin /></a>
                      <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noreferrer" className="social-square naukri" aria-label="Naukri"><FaBriefcase /></a>
                      <a href="https://github.com/IrfanM-7" target="_blank" rel="noreferrer" className="social-square github" aria-label="GitHub"><FaGithub /></a>
                      <a href="https://www.instagram.com/irfan._yk/" target="_blank" rel="noreferrer" className="social-square instagram" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="download-btn-container">
                <a href="/IrfanResume.pdf" download="Resume_Syed_Irfan.pdf" className="download-cv-btn">
                  <FaDownload style={{ marginRight: '10px' }} /> Download My CV
                </a>
              </div>
            </div>
          </section>

          <section id="education" data-section className="section education-section">
            <div className="mobile-section-header">
              <span className="left-small-italic">Education</span>
              <h1 className="left-name-large">My Academic<br />Journey</h1>
            </div>
            <div className="section-wrapper">
              <h2 className="section-title">Education</h2>
              <div className="education-cards">
                {education.map((edu, index) => (
                  <div key={index} className="education-card">
                    <div className="education-card-header">
                      <h3>{edu.school}</h3>
                      <span className="period">{edu.period}</span>
                    </div>
                    <div className="education-card-body">
                      <h4 className="degree">{edu.degree}</h4>
                      <p className="cgpa">CGPA: {edu.cgpa}</p>
                      <ul className="details-list">
                        {edu.details?.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="services" data-section className="section services-section">
            <div className="mobile-section-header">
              <span className="left-small-italic">My Services</span>
              <h1 className="left-name-large">What I do for<br />you</h1>
            </div>
            <div className="section-wrapper">
              <div className="services-list">
                <div className="service-row">
                  <div className="service-icon"><FaCode /></div>
                  <div className="service-title-wrap">
                    <h3 className="service-title">Web Development</h3>
                  </div>
                  <div className="service-desc">
                    <p>Building fast, responsive websites using modern tech like HTML, CSS, JS, and React.</p>
                  </div>
                  <ul className="service-features">
                    <li><FaCheck /> Responsive Design</li>
                    <li><FaCheck /> SEO Optimization</li>
                    <li><FaCheck /> Performance Focused</li>
                  </ul>
                </div>
                <div className="service-row">
                  <div className="service-icon"><FaLayerGroup /></div>
                  <div className="service-title-wrap">
                    <h3 className="service-title">Full Stack Development</h3>
                  </div>
                  <div className="service-desc">
                    <p>End-to-end application development from frontend to backend using React, Node.js, and Databases.</p>
                  </div>
                  <ul className="service-features">
                    <li><FaCheck /> React + Node + DB</li>
                    <li><FaCheck /> REST APIs</li>
                    <li><FaCheck /> Deployment Ready</li>
                  </ul>
                </div>
                <div className="service-row">
                  <div className="service-icon"><FaRobot /></div>
                  <div className="service-title-wrap">
                    <h3 className="service-title">Mastering AI</h3>
                  </div>
                  <div className="service-desc">
                    <p>Exploring AI/ML concepts and integrating intelligent features into web applications using Python and APIs.</p>
                  </div>
                  <ul className="service-features">
                    <li><FaCheck /> Python + ML</li>
                    <li><FaCheck /> AI Tools</li>
                    <li><FaCheck /> Prompt Engineering</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" data-section className="section skills-section">
            <div className="mobile-section-header">
              <span className="left-small-italic">Skills</span>
              <h1 className="left-name-large">What I bring<br />to the table</h1>
            </div>
            <div className="section-wrapper">
              <div className="skills-tabs">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'frontend', label: 'Frontend' },
                  { id: 'backend', label: 'Backend' },
                  { id: 'tools', label: 'Tools' },
                  { id: 'languages', label: 'Languages' },
                  { id: 'ai', label: 'AI & ML' },
                  { id: 'database', label: 'Databases' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    className={`skills-tab ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id as any)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <div className="skills-grid">
                {filteredSkills.map((skill, index) => (
                  <div key={index} className="skill-bubble">
                    <div className="skill-icon">{getSkillIcon(skill.name)}</div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" data-section className="section projects-section">
            <div className="mobile-section-header">
              <span className="left-small-italic">Projects</span>
              <h1 className="left-name-large">My Creative<br />Works</h1>
            </div>
            <div className="section-wrapper">
              <h2 className="section-title">Projects</h2>
              <div className="projects-grid">
                {projects.slice(0, showMoreProjects ? projects.length : 4).map((project) => (
                  <div key={project.id} className="project-card">
                    <div className="project-image-wrapper">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="project-tag">{tag}</span>
                        ))}
                      </div>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="project-link-btn">
                          <FaGithub style={{ marginRight: '8px', fontSize: '18px' }} /> View on GitHub
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {projects.length > 4 && (
                <div className="more-projects-btn-container">
                  <button 
                    className="more-projects-btn" 
                    onClick={() => setShowMoreProjects(!showMoreProjects)}
                  >
                    {showMoreProjects ? 'Show Less' : 'More Projects'}
                  </button>
                </div>
              )}
            </div>
          </section>

          <section id="contact" data-section className="section contact-section">
            <div className="mobile-section-header">
              <span className="left-small-italic">Contact Me</span>
              <h1 className="left-name-large">Let's Start A<br />New Project</h1>
            </div>
            <div className="section-wrapper">
              <h2 className="section-title">Contact</h2>
              <div className="contact-layout">
                <div className="contact-left-card">
                  <div className="contact-header-row">
                    <div className="contact-icon-box">
                      <FaEnvelope />
                    </div>
                    <div className="contact-header-text">
                      <h3>Connect With me</h3>
                      <p>irfuijukas@gmail.com</p>
                    </div>
                  </div>
                  <div className="map-container">
                    <iframe
                      title="Location Map"
                      src="https://maps.google.com/maps?q=Tiruchirappalli,Tamil%20Nadu,India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                    ></iframe>
                    <div className="map-overlay">
                      <a href="https://maps.google.com/?q=Tiruchirappalli,Tamil+Nadu,India" target="_blank" rel="noreferrer" className="map-btn">
                        Open in Maps <FaExternalLinkAlt style={{ marginLeft: '6px', fontSize: '12px' }} />
                      </a>
                    </div>
                  </div>
                </div>
                <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
                  <div className="form-row">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-row">
                    <input type="text" name="project" placeholder="Your Project" required />
                    <input type="tel" name="phone" placeholder="Your Phone" required />
                  </div>
                  <input type="text" name="title" placeholder="Subject" required />
                  <textarea name="message" placeholder="Message" rows={6} required />
                  <button type="submit" className="submit-btn" disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="footer-content">
              <div className="footer-social">
                <a href="https://www.linkedin.com/in/syed-irfan-589b192ba/" target="_blank" rel="noreferrer" className="footer-social-square linkedin" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://github.com/IrfanM-7" target="_blank" rel="noreferrer" className="footer-social-square github" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.instagram.com/irfan._yk/" target="_blank" rel="noreferrer" className="footer-social-square instagram" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noreferrer" className="footer-social-square naukri" aria-label="Naukri"><FaBriefcase /></a>
              </div>
              <p className="footer-text">© 2026 Syed Irfan | AI & ML Engineer Portfolio</p>
            </div>
          </footer>
        </main>
      </div>

      <nav className="side-nav">
        <button className={`nav-item ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')} title="Home">
          <span className="nav-label">Home</span>
          <span className="nav-icon"><FaHome /></span>
        </button>
        <button className={`nav-item ${activeSection === 'education' ? 'active' : ''}`} onClick={() => scrollToSection('education')} title="Education">
          <span className="nav-label">Education</span>
          <span className="nav-icon"><FaUserGraduate /></span>
        </button>
        <button className={`nav-item ${activeSection === 'services' ? 'active' : ''}`} onClick={() => scrollToSection('services')} title="Services">
          <span className="nav-label">Services</span>
          <span className="nav-icon"><FaCogs /></span>
        </button>
        <button className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')} title="Skills">
          <span className="nav-label">Skills</span>
          <span className="nav-icon"><FaBrain /></span>
        </button>
        <button className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')} title="Projects">
          <span className="nav-label">Projects</span>
          <span className="nav-icon"><FaProjectDiagram /></span>
        </button>
        <button className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')} title="Contact">
          <span className="nav-label">Contact</span>
          <span className="nav-icon"><FaEnvelope /></span>
        </button>
      </nav>

      <button className="scroll-to-top" onClick={scrollToTop} title="Scroll to top">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default App;
