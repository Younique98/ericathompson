'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export function Intro() {
  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold flex items-center gap-4">
          <span className="wave inline-block">👋🏾</span>
          <TypeAnimation
            sequence={[
              'Hi, I\'m Erica Thompson',
              1000,
            ]}
            wrapper="span"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
            speed={50}
            repeat={0}
          />
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="text-xl text-gray-300 leading-relaxed"
      >
        <TypeAnimation
          sequence={[
            'Fractional CTO and technical educator. I audit codebases, fix what is broken, and hand teams back clean systems they can run without me. 12+ years. 500+ engineers trained.',
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={0}
          className="inline-block"
        />
      </motion.div>
    </div>
  );
}