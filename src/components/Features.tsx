"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Globe,
  LayoutGrid,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Secure Authentication",
    description:
      "Protect your account with secure authentication, encrypted sessions, and reliable user management.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Lightning Fast",
    description:
      "Optimized performance with Next.js, TypeScript, and modern technologies for an excellent experience.",
    icon: Zap,
  },
  {
    id: 3,
    title: "Responsive Design",
    description:
      "Beautiful interface that works seamlessly across desktop, tablet, and mobile devices.",
    icon: LayoutGrid,
  },
  {
    id: 4,
    title: "Global Access",
    description:
      "Access your products and manage your account from anywhere with a reliable cloud-based platform.",
    icon: Globe,
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Powerful Features Built
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              For Modern Users
            </span>
          </h2>

          <p className="mt-5 text-slate-400">
            Experience a fast, secure, and user-friendly platform designed to
            help you explore, manage, and discover amazing digital products.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mb-4 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}