import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiAward } from 'react-icons/fi'

export default function About() {
  return (
    <div className="pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="section-subtitle">About Me</span>
        <h2 className="section-title">A little bit about who I am.</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-gray-400 text-lg leading-relaxed"
        >
          <p>
            I am currently pursuing my <strong className="text-white">Master of Computer Applications (MCA)</strong> at Mahatma Gandhi University, after completing my BCA. 
            I have a deep passion for building software that solves real-world problems.
          </p>
          <p>
            My technical foundation includes <strong className="text-white">Java, Python, C/C++, and PHP</strong>, alongside modern web technologies like HTML, CSS, JavaScript, and MySQL. 
            I am a quick learner with strong problem-solving and communication skills.
          </p>
          <p>
            I am actively seeking opportunities to grow in software and full-stack development, where I can apply my skills and continue to learn from experienced teams.
          </p>
        </motion.div>

        {/* Right Bento Grid */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bento-card flex flex-col items-center justify-center text-center py-10"
          >
            <FiCode className="text-accent mb-4" size={32} />
            <h3 className="text-white font-bold text-xl mb-1">MCA</h3>
            <p className="text-sm text-gray-500">Current Degree</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bento-card flex flex-col items-center justify-center text-center py-10"
          >
            <FiDatabase className="text-accent mb-4" size={32} />
            <h3 className="text-white font-bold text-xl mb-1">6+</h3>
            <p className="text-sm text-gray-500">Languages & Tools</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bento-card col-span-2 flex items-center gap-6"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <FiAward size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">NPTEL Certified</h3>
              <p className="text-sm text-gray-500">Data Analytics with Python</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}