import { motion } from "framer-motion";
import Hero from "./components/hero";
import Story from "./components/Story";
import LoveLanguage from "./components/LoveLanguage";
import Letter from "./components/Letter";

function App() {
  const loveEmojis = ['💕', '💖', '💗', '💝', '💞', '💓', '💗', '❤️', '💜', '💛', '🧡', '❤️‍🔥', '💑', '💏', '😍', '🥰', '😘', '💋', '🌹', '🎀'];
  const randomPercent = () => `${Math.random() * 100}%`;

  const stickerMessages = ["Happy Valentine's!", "Be Mine", "XOXO", "Love You", "Forever & Always", "You're My Everything", "My Sweetheart", "All My Love", "Hugs & Kisses", "Kiss Me"];
  const primaryMessage = "Happy Valentine's Day!";

  // Generate 80 stickers spread all over the screen
  const stickers = Array.from({ length: 80 }, (_, i) => {
    const message = i % 2 === 0 ? primaryMessage : stickerMessages[i % stickerMessages.length];
    const emoji = loveEmojis[i % loveEmojis.length];
    return {
      id: i,
      text: `${message} ${emoji}`,
      top: randomPercent(),
      left: randomPercent(),
      rotation: Math.random() * 36 - 18,
      scale: Math.random() * 0.35 + 0.85,
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 1.2,
    };
  });

  // Generate 100 background emojis
  const emojis = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    emoji: loveEmojis[Math.floor(Math.random() * loveEmojis.length)],
    left: randomPercent(),
    top: randomPercent(),
    size: Math.random() * 34 + 16,
    delay: Math.random() * 4,
    duration: Math.random() * 10 + 6,
  }));
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Smooth gradient overlay - fixed */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-100/30 via-purple-100/30 to-rose-100/30 pointer-events-none z-0"></div>

      {/* FULL-SCREEN STICKERS AND EMOJIS LAYER */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-5 overflow-hidden">
        {/* Background emojis */}
        {emojis.map((item) => (
          <motion.div
            key={`emoji-${item.id}`}
            className="absolute opacity-30"
            style={{
              left: item.left,
              top: item.top,
              fontSize: `${item.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              scale: [1, 1.4, 1],
              opacity: [0.08, 0.35, 0.08],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item.emoji}
          </motion.div>
        ))}

        {/* Flickering stickers */}
        {stickers.map((sticker, index) => (
          <motion.div
            key={`sticker-${sticker.id}`}
            className="absolute"
            style={{
              top: sticker.top,
              left: sticker.left,
              rotate: `${sticker.rotation}deg`,
            }}
            animate={{
              scale: [sticker.scale, sticker.scale + 0.15, sticker.scale * 0.95, sticker.scale + 0.1],
              opacity: [0.25, 0.85, 0.35, 0.9],
              rotate: [sticker.rotation, sticker.rotation + 7, sticker.rotation - 7, sticker.rotation],
            }}
            transition={{
              duration: sticker.duration + index * 0.05,
              delay: sticker.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="bg-gradient-to-br from-pink-400 via-rose-400 to-red-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-2xl border-2 sm:border-3 border-white font-bold text-xs sm:text-sm text-center whitespace-nowrap">
              {sticker.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 py-2">
        {/* Content sections container */}
        <div className="w-7xl max-w-7xl mx-auto relative z-10 text-center space-y-0 p-4">
          <Hero />
          <Story />
          <LoveLanguage />
          <Letter />
          
          {/* Footer */}
          <footer className="text-center py-2 px-4">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="font-romantic text-2xl md:text-3xl text-love mb-2">
                Made with love, just for you ❤️
              </p>
              <p className="text-sm md:text-base opacity-75 text-gray-600">
                Happy Valentine's Day 2026 💕
              </p>
            </motion.div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
