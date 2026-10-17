import { FiArrowRight } from 'react-icons/fi'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center pt-20">
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border w-max mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">Available for opportunities</span>
          </div>

          {/* Main Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            Hi, I'm Fathima <br />
            <span className="text-accent">Full-Stack Developer</span>
          </h1>

          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
            An MCA student and BCA graduate with a strong foundation in web development, programming, and database management. 
            I build functional, user-friendly solutions using modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-4 rounded-xl bg-white text-dark-bg font-bold flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition-colors"
            >
              View My Work <FiArrowRight />
            </ScrollLink>
            
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-4 rounded-xl border border-dark-border text-white font-bold cursor-pointer hover:bg-dark-card transition-colors"
            >
              Contact Me
            </ScrollLink>
          </div>
        </motion.div>

        {/* Right Side - Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Decorative Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl blur-2xl transform rotate-3" />
          
          {/* Photo Card */}
          <div className="relative aspect-[4/5] max-w-sm ml-auto rounded-3xl overflow-hidden border border-dark-border bg-dark-card p-2">
            <img 
              src="/profile.jpg" 
              alt="Fathima C I" 
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

      </div>
    </div>
  )
}