import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Cancer Care & Patient Support with AI Chatbot',
    year: '2026',
    description: 'A comprehensive web-based system designed to support cancer patients. It handles information, appointments, and patient-care services, while integrating an AI chatbot to provide instant basic guidance and assistance to users.',
    tech: ['Python', 'AI / NLP', 'Web Dev', 'MySQL'],
    featured: true,
  },
  {
    id: 2,
    title: 'House Boat Reservation System',
    year: '2025',
    description: 'A full-stack web platform for browsing houseboats, making reservations, and managing bookings. Includes secure user authentication, robust booking validation, database management, and API functionality.',
    tech: ['Java', 'PHP', 'MySQL', 'HTML/CSS'],
    featured: false,
  },
  {
    id: 3,
    title: 'Labour Booking Website',
    year: '2024',
    description: 'A platform connecting daily-wage workers and employers. It features job listings, booking management, user authentication, database functionality, and integrated payment processing.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Payment API'],
    featured: false,
  }
]

export default function Projects() {
  return (
    <div className="pt-20">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="section-subtitle">My Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl">
          Real-world applications I have designed and developed, from AI-powered healthcare solutions to full-stack booking platforms.
        </p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`group bento-card p-0 flex flex-col ${
              project.featured ? 'md:flex-row' : 'md:flex-row-reverse' // Alternate layout
            } overflow-hidden`}
          >
            
            {/* Visual Placeholder (Left or Right depending on featured) */}
            <div className="w-full md:w-2/5 min-h-[250px] bg-gradient-to-br from-dark-bg to-dark-border relative flex items-center justify-center p-8 border-b md:border-b-0 border-dark-border">
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
              
              {/* Tech Stack Pill (Floating) */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-dark-bg/80 backdrop-blur-md rounded-full border border-dark-border text-xs font-mono text-accent z-10">
                {project.year}
              </div>

              <h3 className="text-5xl md:text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-500 text-center select-none z-10">
                {project.id === 1 ? 'AI' : project.id === 2 ? 'BOOK' : 'WORK'}
              </h3>
            </div>

            {/* Content */}
            <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center relative z-10">
              <div className="glow-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {project.title}
              </h4>
              
              <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium rounded-md bg-dark-bg border border-dark-border text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links (Mock Links - update if she has GitHub) */}
              <div className="flex items-center gap-4 mt-auto">
                <a href="https://github.com/fathimaci" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors">
                  View Project <FiArrowRight />
                </a>
                <a href="https://github.com/fathimaci" className="p-2 rounded-full bg-dark-bg border border-dark-border text-gray-400 hover:text-white hover:border-accent transition-colors">
                  <FiGithub size={18} />
                </a>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  )
}