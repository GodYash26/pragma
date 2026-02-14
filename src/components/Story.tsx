import { motion } from "framer-motion";
import FlickeringStickers from "./FlickeringStickers";

const memories = [
  {
    title: "The day we met",
    description: "That day changed my entire life forever.",
    icon: "🌟",
    color: "from-pink-500/30 to-red-500/30"
  },
  {
    title: "Our first meeting",
    description: "Our first meeting was the start of something beautiful, which started from college and now we are together.",
    icon: "💫",
    color: "from-purple-500/30 to-pink-500/30"
  },
  {
    title: "When I realized I love you",
    description: "My heart chose you without asking me.",
    icon: "💖",
    color: "from-rose-500/30 to-pink-500/30"
  }
];

export default function Story() {
  return (
    <div className="w-full py-8 sm:py-10 px-4 sm:px-6 relative">
      <FlickeringStickers count={60} size="text-3xl sm:text-4xl" fullScreen={true} />

      <div className="relative z-10">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-5 sm:left-10 text-4xl sm:text-6xl opacity-20 animate-float">💕</div>
        <div className="absolute bottom-10 right-5 sm:right-10 text-4xl sm:text-6xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>💝</div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 sm:mb-5 px-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-center text-white font-romantic mb-4 animate-shimmer">
            Our Story
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="mb-3 sm:mb-4 relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-6 sm:p-8 bg-gradient-to-br ${memory.color} rounded-3xl shadow-love border-2 border-pink-400/50 backdrop-blur-md relative overflow-hidden group hover:shadow-glow transition-all duration-500`}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 text-5xl sm:text-7xl opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                  {memory.icon}
                </div>

                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="text-4xl sm:text-5xl mb-4"
                  >
                    {memory.icon}
                  </motion.div>
                  
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-elegant font-bold text-pink-300 mb-3">
                      {memory.title}
                    </h3>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                      {memory.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot - hidden on mobile */}
                <div className="hidden sm:block absolute -left-3 top-1/2 w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
