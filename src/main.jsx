import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Menu from './components/Menu.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx';
import Skill from './components/Skill.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
    <Hero />
    <About />
    <Skill />
    <Experience />
    <Project />
    <Form />
    <Footer />
  </StrictMode>,
)
