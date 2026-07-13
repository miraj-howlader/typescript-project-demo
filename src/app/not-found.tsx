"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Background */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl"
      >
        {/* 404 */}
        <motion.h1
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl"
        >
          404
        </motion.h1>

        <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
          Oops! Page Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-slate-400">
          The page you re looking for doesnt exist, may have been moved,
          or the URL is incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition hover:scale-105"
          >
            <Home size={20} />
            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Decorative line */}
        <div className="mx-auto mt-12 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
      </motion.div>
    </main>
  );
}