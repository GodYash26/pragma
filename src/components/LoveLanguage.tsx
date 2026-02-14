import { motion } from "framer-motion";
import FlickeringStickers from "./FlickeringStickers";

const reasons = [
  {
    text: "Your smile makes my worst days better",
    icon: "😊",
    gradient: "from-pink-500/40 to-rose-500/40"
  },
  {
    text: "You believe in me when I doubt myself",
    icon: "🌟",
    gradient: "from-purple-500/40 to-pink-500/40"
  },
  {
    text: "You make life feel meaningful",
    icon: "✨",
    gradient: "from-rose-500/40 to-pink-500/40"
  },
  {
    text: "You are my peace",
    icon: "🕊️",
    gradient: "from-pink-500/40 to-purple-500/40"
  }
];

export default function LoveLanguage() {
  return (
    <div className="w-full py-8 sm:py-10 px-4 sm:px-6 text-center relative flex flex-col items-center">
      <FlickeringStickers count={80} size="text-3xl" fullScreen={true} />
      
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-5 text-4xl sm:text-5xl opacity-10 animate-float">💝</div>
          <div className="absolute top-40 right-10 text-3xl sm:text-4xl opacity-10 animate-float" style={{ animationDelay: '0.5s' }}>💖</div>
          <div className="absolute bottom-20 left-1/4 text-5xl sm:text-6xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>💗</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-5 px-4 relative z-10 w-full text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-romantic mb-4 animate-shimmer">
            Why You Are Special
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-light">
            There are countless reasons, but here are a few that make my heart full ❤️
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto relative z-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotate: index % 2 === 0 ? 2 : -2,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${reason.gradient} p-6 sm:p-8 rounded-3xl shadow-love hover:shadow-2xl transition-all duration-300 border-2 border-pink-400/50 relative overflow-hidden backdrop-blur-md hover:shadow-glow`}>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000"></div>
                
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="text-5xl sm:text-6xl mb-4"
                >
                  {reason.icon}
                </motion.div>
                
                <p className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-relaxed drop-shadow-md text-center">
                  {reason.text}
                </p>

                {/* Heart decoration */}
                <div className="absolute -bottom-2 -right-2 text-5xl sm:text-6xl opacity-20">💕</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-4 sm:mt-5 text-4xl"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            💝 You are my future
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
