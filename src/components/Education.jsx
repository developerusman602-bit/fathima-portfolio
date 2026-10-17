import { motion } from 'framer-motion'
import { FiAward, FiBookOpen } from 'react-icons/fi'

export default function Education() {
  return (
    <div className="pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="section-subtitle">Background</span>
        <h2 className="section-title">Education & Certifications</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FiBookOpen className="text-accent" size={24} />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          
          <div className="space-y-6 border-l border-dark-border ml-3 pl-8 relative">
            {/* Timeline Dot 1 */}
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <div className="bento-card">
              <span className="text-sm text-accent font-semibold mb-2 block">2025 - Present</span>
              <h4 className="text-xl font-bold text-white">Master of Computer Application</h4>
              <p className="text-gray-400 mt-1">Mahatma Gandhi University</p>
            </div>

            {/* Timeline Dot 2 */}
            <div className="absolute w-3 h-3 bg-dark-border rounded-full -left-[6.5px] top-[180px]" />
            <div className="bento-card">
              <span className="text-sm text-gray-500 font-semibold mb-2 block">2022 - 2025</span>
              <h4 className="text-xl font-bold text-white">Bachelor of Computer Application</h4>
              <p className="text-gray-400 mt-1">Mahatma Gandhi University</p>
            </div>
          </div>
        </motion.div>

        {/* Certifications Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FiAward className="text-accent" size={24} />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Data Analytics with Python', issuer: 'NPTEL', year: '2026' },
              { title: 'GenAI Powered Data Analytics', issuer: 'Forage', year: '2026' },
              { title: 'Digital Forensics in AI', issuer: 'AICTE ATAL Academy', year: '2026' },
              { title: 'Python, Java, PHP & MySQL, Linux', issuer: 'IIT Bombay (Spoken Tutorial)', year: '2025' },
            ].map((cert, i) => (
              <div key={i} className="bento-card p-5 flex items-start gap-4 hover:border-accent/30">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <FiAward size={18} />
                </div>
                <div>
                  <h4 className="text-white font-bold">{cert.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}