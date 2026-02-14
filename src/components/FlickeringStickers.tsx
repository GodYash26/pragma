import { useMemo } from 'react';
import { motion } from 'framer-motion';

const emojiStickers = [
  '💕', '💖', '💗', '💝', '💘', '💞', '💓', '💑',
  '✨', '⭐', '🌟', '💫', '🎇', '🎆', '💥',
  '🌹', '🌸', '🌺', '🌻', '🌼', '🌷',
  '💐', '🎀', '🎊', '🎉', '👑', '💎'
];

const messageStickers = [
  "Happy Valentine's Day!",
  "Happy Valentine's!",
  "Be Mine",
  "XOXO",
  "Love You",
  "Forever & Always",
  "You're My Everything",
  "My Sweetheart",
  "All My Love",
  "Hugs & Kisses",
  "Kiss Me",
];

interface FlickeringStickersProps {
  count?: number;
  size?: string;
  messageCount?: number;
  sparkleCount?: number;
  spreadX?: number;
  spreadY?: number;
  fullScreen?: boolean;
}

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);
const spreadPercent = (spread: number) => randomBetween(-(spread - 100) / 2, 100 + (spread - 100) / 2);

const FlickeringStickers = ({
  count = 90,
  size = 'text-2xl',
  messageCount,
  sparkleCount,
  spreadX = 100,
  spreadY = 100,
  fullScreen = true,
}: FlickeringStickersProps) => {
  const resolvedMessageCount = messageCount ?? Math.max(8, Math.round(count * 0.35));
  const resolvedSparkleCount = sparkleCount ?? Math.max(14, Math.round(count * 0.6));

  const emojiItems = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        sticker: emojiStickers[Math.floor(Math.random() * emojiStickers.length)],
        left: spreadPercent(spreadX),
        top: spreadPercent(spreadY),
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 1.5,
        scale: 0.7 + Math.random() * 0.8,
        rotate: Math.random() * 360,
      })),
    [count, spreadX, spreadY]
  );

  const messageItems = useMemo(
    () =>
      Array.from({ length: resolvedMessageCount }, (_, i) => ({
        id: i,
        text: messageStickers[i % messageStickers.length],
        left: spreadPercent(spreadX),
        top: spreadPercent(spreadY),
        delay: Math.random() * 2,
        duration: 2.4 + Math.random() * 1.6,
        scale: 0.85 + Math.random() * 0.35,
        rotate: Math.random() * 24 - 12,
      })),
    [resolvedMessageCount, spreadX, spreadY]
  );

  const sparkleItems = useMemo(
    () =>
      Array.from({ length: resolvedSparkleCount }, (_, i) => ({
        id: i,
        left: spreadPercent(spreadX),
        top: spreadPercent(spreadY),
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
        size: Math.random() * 2.2 + 1,
      })),
    [resolvedSparkleCount, spreadX, spreadY]
  );

  return (
    <div 
      className={`${fullScreen ? 'fixed' : 'absolute'} inset-0 -m-6 sm:-m-10 pointer-events-none z-0`}
      aria-hidden="true"
    >
      {sparkleItems.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute rounded-full bg-white/80"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            boxShadow: '0 0 10px rgba(255, 192, 203, 0.6)',
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {emojiItems.map((item) => (
        <motion.div
          key={`emoji-${item.id}`}
          className={`absolute ${size}`}
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [0, item.scale, 0],
            opacity: [0, 0.85, 0],
            y: [0, -40, -80],
            rotate: [0, item.rotate],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {item.sticker}
        </motion.div>
      ))}

      {messageItems.map((item) => (
        <motion.div
          key={`message-${item.id}`}
          className="absolute"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            transform: 'translate(-50%, -50%)',
            rotate: `${item.rotate}deg`,
          }}
          animate={{
            scale: [item.scale * 0.85, item.scale, item.scale * 0.9],
            opacity: [0.4, 1, 0.6],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="bg-gradient-to-br from-pink-400/80 via-rose-400/80 to-red-500/80 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-2xl border border-white/70 font-semibold text-[10px] sm:text-xs whitespace-nowrap backdrop-blur-md">
            {item.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FlickeringStickers;
