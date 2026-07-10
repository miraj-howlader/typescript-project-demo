"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email);

    // TODO: Send email to backend

    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-14"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600"
              >
                <Mail className="h-8 w-8 text-white" />
              </motion.div>

              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Subscribe to Our
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Newsletter
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
                Get the latest updates, new products, exclusive offers, and
                helpful tips delivered directly to your inbox.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">5K+</h3>
                  <p className="text-slate-400">Subscribers</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">Weekly</h3>
                  <p className="text-slate-400">Updates</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
                  <p className="text-slate-400">No Spam</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl"
            >
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Stay Connected
              </h3>

              <label className="mb-3 block text-sm font-medium text-slate-300">
                Email Address
              </label>

              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-5 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-500"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white shadow-lg transition"
              >
                Subscribe Now
                <Send size={18} />
              </motion.button>

              <p className="mt-5 text-center text-sm text-slate-400">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}