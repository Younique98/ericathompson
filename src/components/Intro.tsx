'use client';

import { TypeAnimation } from 'react-type-animation';

// TypeAnimation needs a client boundary for its internal hooks - unrelated
// to the animation fix below, this file just happens to be both.
//
// Pure CSS entrance animation (see .animate-reveal in globals.css) - not
// Framer Motion's mount-triggered `animate`, which still ships opacity:0
// in the server-rendered HTML and only becomes visible once JS hydrates.
// This is the very first thing a visitor sees, so it can't depend on
// hydration speed to become visible.
export function Intro() {
  return (
    <div className="py-16">
      <div className="animate-reveal mb-8">
        <h1 className="text-4xl font-bold flex items-center gap-4">
          <span className="wave inline-block">👋🏾</span>
          <TypeAnimation
            sequence={[
              'Hi, I\'m Erica Thompson',
              1000,
            ]}
            wrapper="span"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-transparent bg-clip-text"
            speed={50}
            repeat={0}
          />
        </h1>
      </div>

      <div
        className="animate-reveal text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
        style={{ animationDelay: '1.5s' }}
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
      </div>
    </div>
  );
}