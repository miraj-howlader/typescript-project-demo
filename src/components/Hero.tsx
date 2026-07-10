"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex h-[65vh] items-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      {/* Background Blur */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            🚀 Modern Marketplace
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Discover Amazing
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Products
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
            Explore thousands of premium digital products created by talented
            creators. Buy, sell, and manage everything from one modern platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/explore"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition"
              >
                Explore Items
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/items/add"
                className="rounded-xl border border-white/20 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Add Item
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="hidden justify-center lg:flex"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex h-[380px] w-[380px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-5xl">
                🚀
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Premium Marketplace
              </h3>

              <p className="mt-3 px-8 text-slate-400">
                Secure • Fast • Responsive • Built with Next.js
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-slate-300">
          <span className="mb-2 text-sm">Scroll</span>

          <div className="flex h-10 w-6 justify-center rounded-full border border-slate-400">
            <motion.div
              animate={{ y: [2, 18, 2] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="mt-2 h-2 w-2 rounded-full bg-cyan-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}