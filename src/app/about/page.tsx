"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Users,
  Rocket,
  Globe,
  Award,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    title: "Innovation",
    description:
      "We continuously improve our platform using modern technologies and best practices.",
    icon: Rocket,
  },
  {
    title: "Security",
    description:
      "Your data is protected with secure authentication and trusted infrastructure.",
    icon: ShieldCheck,
  },
  {
    title: "Community",
    description:
      "Thousands of creators and customers collaborate on our marketplace.",
    icon: Users,
  },
];

const stats = [
  {
    number: "5K+",
    title: "Active Users",
  },
  {
    number: "2K+",
    title: "Products",
  },
  {
    number: "98%",
    title: "Positive Reviews",
  },
  {
    number: "24/7",
    title: "Support",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold md:text-6xl"
          >
            About
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              CORENET
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-slate-400"
          >
            CORENET is a modern digital marketplace designed to help creators,
            businesses, and customers discover premium digital products in one
            secure platform.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">Our Story</h2>

            <p className="mt-6 leading-8 text-slate-400">
              CORENET was built to simplify how people buy, sell, and manage
              digital products. We believe every creator deserves an elegant
              platform that makes publishing and selling effortless while
              giving customers a seamless shopping experience.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              From secure authentication to fast performance and responsive
              design, every feature has been carefully crafted for a
              professional experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <Globe className="mb-5 h-14 w-14 text-cyan-400" />

            <h3 className="text-2xl font-semibold">
              Connecting Creators Worldwide
            </h3>

            <p className="mt-4 text-slate-400">
              Our platform empowers creators from around the world to showcase
              their work and connect with customers globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <Target className="mb-5 h-12 w-12 text-cyan-400" />

              <h3 className="text-3xl font-bold">Our Mission</h3>

              <p className="mt-5 text-slate-400 leading-8">
                To provide an accessible, secure, and high-performance
                marketplace where digital creators and customers thrive
                together.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <Award className="mb-5 h-12 w-12 text-cyan-400" />

              <h3 className="text-3xl font-bold">Our Vision</h3>

              <p className="mt-5 text-slate-400 leading-8">
                To become one of the worlds most trusted digital marketplaces
                by delivering innovation, quality, and outstanding user
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 text-center text-4xl font-bold">
            Why Choose Us
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.div
                  whileHover={{ y: -10 }}
                  key={value.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <Icon className="mb-5 h-12 w-12 text-cyan-400" />

                  <h3 className="text-2xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
              >
                <h3 className="text-5xl font-bold text-cyan-400">
                  {stat.number}
                </h3>

                <p className="mt-3 text-slate-400">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-600 to-blue-700 p-12 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Join CORENET?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-blue-100">
            Create your account today and explore thousands of premium digital
            products from creators around the world.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}