import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Menu from './components/Menu.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Skill from './components/Skill.jsx';
import Achievement from './components/Achievment.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
    <Hero />
    <About />
    <Skill />
    <Experience />
    <Project />
    <Achievement />
    <Contact />
    <Footer />
  </StrictMode>,
)
