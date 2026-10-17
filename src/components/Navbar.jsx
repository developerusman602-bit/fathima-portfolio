import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FiMenu, FiX, FiGithub } from 'react-icons/fi'

const links = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-dark-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-xl font-bold text-white cursor-pointer tracking-tighter"
        >
          Fathima<span className="text-accent">.</span>
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-accent font-semibold"
              className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors"
            >
              {link.name}
            </ScrollLink>
          ))}

           {/* GITHUB LINK */}
          <a 
            href="https://github.com/fathimaci" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FiGithub size={20} />
          </a>

          <a
            href="mailto:fathimaci004@gmail.com"
            className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-dark-card border-b border-dark-border absolute top-full left-0 right-0 py-4 px-6 flex flex-col gap-4 shadow-xl">
          {links.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 text-lg cursor-pointer hover:text-accent"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  )
}