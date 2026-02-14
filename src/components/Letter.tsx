import { motion } from "framer-motion";
import FlickeringStickers from "./FlickeringStickers";

export default function Letter() {
  return (
    <div className="w-full py-8 sm:py-10 text-center px-4 sm:px-6 flex flex-col items-center justify-center relative">
      <FlickeringStickers count={65} size="text-3xl" fullScreen={true} />
      
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {/* Background hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl sm:text-5xl opacity-5"
              style={{
                left: `${(i * 15) % 100}%`,
                top: `${(i * 20) % 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              💕
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full relative"
        >
          {/* Envelope-style letter */}
          <div className="bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-red-400/20 p-8 sm:p-12 md:p-16 rounded-3xl shadow-love border-4 border-pink-500/40 relative overflow-hidden backdrop-blur-md hover:shadow-glow transition-all duration-500">
            
            {/* Decorative corner ribbons */}
            <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-pink-400 to-transparent opacity-20 rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-tl from-purple-400 to-transparent opacity-20 rounded-tl-full"></div>
            
            {/* Wax seal effect */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-red-500/40 to-pink-600/40 rounded-full border-4 border-pink-400/60 shadow-xl flex items-center justify-center text-2xl sm:text-3xl backdrop-blur-md animate-glow"
            >
              💌
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-romantic mb-6 sm:mb-8 text-center animate-shimmer">
                A Letter For You 💕
              </h2>

              <div className="space-y-4 sm:space-y-6 text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed text-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="font-elegant"
                >
                  My Dearest Love,
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  You are the most beautiful part of my life.
                  Every moment with you feels like a dream I never want to wake up from.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  You are not just important to me — <span className="font-bold text-pink-300">you are everything</span>.
                  My heart beats for you, my soul finds peace with you, and my life has meaning because of you.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-center pt-6 sm:pt-8 font-romantic text-xl sm:text-2xl text-pink-300"
                >
                  Forever yours,
                  <br />
                  <span className="text-3xl sm:text-4xl animate-pulse-heart">💖</span>
                </motion.p>
              </div>
            </motion.div>

            {/* Decorative hearts */}
            <div className="absolute bottom-4 left-4 text-2xl sm:text-3xl opacity-20 animate-pulse-heart">💗</div>
            <div className="absolute top-4 right-16 sm:right-20 text-xl sm:text-2xl opacity-20 animate-pulse-heart" style={{ animationDelay: '0.5s' }}>💝</div>
          </div>

          {/* Happy Valentine's Day message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
            className="text-center mt-3 sm:mt-4"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block bg-gradient-to-r from-pink-500/40 via-red-500/40 to-pink-500/40 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full shadow-love text-xl sm:text-2xl md:text-3xl font-romantic border border-pink-400/60 backdrop-blur-md hover:shadow-glow transition-all"
            >
              Happy Valentine's Day! 💝
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
