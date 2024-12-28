import { motion } from 'framer-motion';

export default function SDGCard({ sdg, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="relative group rounded-xl overflow-hidden bg-white shadow-lg"
    >
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${sdg.color} opacity-10`}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative p-8">
        <motion.div 
          className="text-4xl font-bold text-secondary-900 mb-6"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {sdg.sdg}
        </motion.div>
        <h3 className="text-xl font-semibold text-secondary-800 mb-4">{sdg.title}</h3>
        <p className="text-secondary-600">{sdg.description}</p>
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 absolute -top-6 -right-6 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        />
      </div>
    </motion.div>
  );
} 