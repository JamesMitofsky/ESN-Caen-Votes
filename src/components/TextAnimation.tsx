'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type TextAnimationProps = {
  texts: string[];
  duration?: number;
};

const TextAnimation = ({ texts, duration = 2 }: TextAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [texts, duration]);

  return (
    <span>
      <AnimatePresence mode='wait'>
        <motion.div
          key={texts[currentTextIndex]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {texts[currentTextIndex]}
        </motion.div>
      </AnimatePresence>
    </span>
  );
};

export default TextAnimation;
