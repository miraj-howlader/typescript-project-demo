"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative flex flex-col items-center">
        {/* Animated Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative h-20 w-20"
        >
          <div className="absolute inset-0 rounded-full border-4 border-slate-700" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-500" />
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-8"
        >
          <h1 className="text-4xl font-bold text-white">
            CORE
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              NET
            </span>
          </h1>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-4 text-lg text-slate-400"
        >
          Loading...
        </motion.p>

        {/* Animated Dots */}
        <div className="mt-3 flex gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
              className="h-3 w-3 rounded-full bg-cyan-400"
            />
          ))}
        </div>
      </div>
    </main>
  );
}