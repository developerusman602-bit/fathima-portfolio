import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP']
  },
  {
    title: 'Backend & Programming',
    skills: ['Java', 'Python', 'C', 'C++']
  },
  {
    title: 'Database',
    skills: ['MySQL', 'DBMS', 'OOP']
  },
  {
    title: 'Tools & OS',
    skills: ['Linux', 'Windows', 'Git']
  }
]

export default function Skills() {
  return (
    <div className="pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <span className="section-subtitle">My Toolkit</span>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive list of the programming languages, frameworks, and tools I use to build software.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bento-card"
          >
            <div className="glow-effect" />
            <h3 className="text-xl font-bold text-white mb-6 border-b border-dark-border pb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-sm text-gray-300 font-medium hover:border-accent hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}