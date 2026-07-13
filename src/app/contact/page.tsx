"use client";

import { motion } from "framer-motion";
import { FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO:
    // Send data to backend API

    alert("Message sent successfully!");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
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
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
          >
            We d love to hear from you. Whether you have a question,
            suggestion, or business inquiry, our team is ready to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="pb-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Phone,
              title: "Phone",
              value: "+880 1404576127",
            },
            {
              icon: Mail,
              title: "Email",
              value: "mirajhowlader99999@gmail.com",
            },
            {
              icon: MapPin,
              title: "Address",
              value: "Dhaka, Bangladesh",
            },
            {
              icon: Clock,
              title: "Working Hours",
              value: "Mon - Sun : 9AM - 6PM",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                whileHover={{ y: -6 }}
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">
                  <Icon className="text-white" />
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {item.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">
              Send Us a Message
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Fill out the form and we ll get back to you as soon as
              possible.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="font-semibold">Customer Support</h3>

                <p className="text-slate-400">
                  Available Monday to Friday.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Business Partnership</h3>

                <p className="text-slate-400">
                  Contact us for collaboration opportunities.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Technical Support</h3>

                <p className="text-slate-400">
                  Need help? Our technical team is ready.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="space-y-5">
              <div>
                <label className="mb-2 block">
                  Full Name
                </label>

                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block">
                  Email Address
                </label>

                <input
                  required
                  type="email"
                  placeholder="john@email.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block">
                  Subject
                </label>

                <input
                  required
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block">
                  Message
                </label>

                <textarea
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-500"
                />
              </div>

              <button
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold transition hover:scale-[1.02]"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-80 items-center justify-center rounded-3xl border border-white/10 bg-slate-900 text-center">
            <div>
              <MapPin className="mx-auto mb-4 h-12 w-12 text-cyan-400" />
              <h3 className="text-2xl font-semibold">
                Google Maps
              </h3>
              <p className="mt-3 text-slate-400">
                Embed your Google Map here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}