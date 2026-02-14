import { motion } from "framer-motion";
import FlickeringStickers from "./FlickeringStickers";

export default function Hero() {
    const hearts = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
    }));

    return (
        <div className="w-full flex items-center justify-center flex-col text-center px-4 sm:px-6 relative overflow-visible py-6 sm:py-8 min-h-screen gap-8">
      <FlickeringStickers count={70} size="text-3xl sm:text-4xl" fullScreen={true} />
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute text-3xl sm:text-4xl opacity-20"
                    style={{ left: heart.left, top: '100%' }}
                    animate={{
                        y: [0, -1000],
                        rotate: [0, 360],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    💕 I love You 😽😽😽😽
                </motion.div>
            ))}


            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-4xl"
            >
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl sm:text-6xl md:text-8xl mb-6 sm:mb-8 animate-pulse-heart"
                >
                    <p className="text-sm sm:text-base mt-2">I want You 🤗🤗</p>
                    <p className="text-sm sm:text-base mt-2">🥰🥰</p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-5xl sm:text-6xl md:text-8xl font-romantic text-white mb-6 sm:mb-8 drop-shadow-lg px-4 animate-shimmer"
                >
                    To My Love 😍
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-love border-2 border-pink-400/50 mx-4 sm:mx-auto max-w-2xl hover:shadow-glow transition-all"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed text-center"
                    >
                        This is not just a website. ✨
                        <br />
                        <span className="font-semibold text-pink-300">
                            This is a small world I created to show you how special you are to me.
                        </span>
                    </motion.p>
                </motion.div>

                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
                    className="text-4xl sm:text-5xl mt-6 animate-pulse-heart"
                >
                    💝 You are my everything 💝
                </motion.div>
            </motion.div>
        </div>
    );
}
