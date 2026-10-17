import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiSend, FiGithub } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // This opens the user's default email app with the message pre-filled
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Hi Fathima,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    window.location.href = `mailto:fathimaci004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="pt-20 pb-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title">Let's build something together.</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8">
        
        {/* Left Side - Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2 space-y-4"
        >
          <a href="mailto:fathimaci004@gmail.com" className="bento-card flex items-center gap-4 hover:border-accent/50 group">
            <div className="w-12 h-12 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center text-gray-400 group-hover:text-accent transition-colors">
              <FiMail size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
              <p className="text-white font-semibold">fathimaci004@gmail.com</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/fathima-ci" target="_blank" rel="noreferrer" className="bento-card flex items-center gap-4 hover:border-accent/50 group">
            <div className="w-12 h-12 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center text-gray-400 group-hover:text-accent transition-colors">
              <FiLinkedin size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">LinkedIn</p>
              <p className="text-white font-semibold">linkedin.com/in/fathima-ci</p>
            </div>
          </a>

          {/* GITHUB CARD (ADD THIS) */}
          <a href="https://github.com/fathimaci" target="_blank" rel="noreferrer" className="bento-card flex items-center gap-4 hover:border-accent/50 group">
            <div className="w-12 h-12 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center text-gray-400 group-hover:text-accent transition-colors">
              <FiGithub size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">GitHub</p>
              <p className="text-white font-semibold">github.com/fathimaci</p>
            </div>
          </a>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-3 bento-card"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-xl text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-xl text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                name="message" 
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-xl text-white focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Hello Fathima, I'd like to talk about..."
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Send Message <FiSend />
            </button>
          </form>
        </motion.div>

      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Fathima C I. Built with React & Tailwind.</p>
      </div>
    </div>
  )
}