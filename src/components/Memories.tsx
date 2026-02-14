import { motion } from 'framer-motion';

interface MemoriesProps {
  title: string;
  memories: string[];
}

export default function Memories({ title, memories }: MemoriesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-3xl shadow-love border-3 border-pink-200 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 text-5xl opacity-10 animate-pulse-heart">💕</div>
      <div className="absolute bottom-0 right-0 text-5xl opacity-10 animate-pulse-heart">💝</div>
      
      <h3 className="text-2xl md:text-3xl font-romantic text-love text-center mb-6">
        {title}
      </h3>
      
      <div className="space-y-3">
        {memories.map((memory, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="text-gray-700 text-center font-light"
          >
            ✨ {memory}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
