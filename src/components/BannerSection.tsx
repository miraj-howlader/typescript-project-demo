"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BannerSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      {/* Background Effects */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 p-8 shadow-2xl md:p-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                🚀 Join Thousands of Users
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
                Start Exploring Premium
                <span className="block">
                  Digital Products Today
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-lg text-blue-100">
                Discover high-quality digital resources, manage your own
                products, and connect with creators around the world—all from
                one modern platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/explore"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105"
                >
                  Explore Items
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/register"
                  className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -10, 0],
              }}
              className="flex justify-center"
            >
              <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <h3 className="text-4xl font-bold text-white">5K+</h3>
                    <p className="mt-2 text-blue-100">Active Users</p>
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-white">2K+</h3>
                    <p className="mt-2 text-blue-100">Products</p>
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-white">99%</h3>
                    <p className="mt-2 text-blue-100">Satisfaction</p>
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-white">24/7</h3>
                    <p className="mt-2 text-blue-100">Support</p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-white/10 p-4">
                  <p className="text-center text-sm text-white">
                    ⭐ Trusted by creators and businesses worldwide.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}