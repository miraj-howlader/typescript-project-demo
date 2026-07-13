"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";


export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-xl font-bold text-white">
                C
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  CORE<span className="text-cyan-400">NET</span>
                </h2>

                <p className="text-sm text-slate-400">
                  Digital Marketplace
                </p>
              </div>
            </Link>

            <p className="mt-6 leading-7 text-slate-400">
              A modern marketplace where users can discover, buy, and manage
              premium digital products with a secure and seamless experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/items/add"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Add Item
                </Link>
              </li>

              <li>
                <Link
                  href="/items/manage"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Manage Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-cyan-400" />
                <span className="text-slate-400">
                  Dhaka, Bangladesh
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <a
                  href="tel:+880 1404576127"
                  className="text-slate-400 hover:text-cyan-400"
                >
                  +880 1404576127
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <a
                  href="mailto:mirajhowlader9999@gmail.com"
                  className="text-slate-400 hover:text-cyan-400"
                >
                  mirajhowlader9999@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Follow Us
            </h3>

            <p className="mb-6 text-slate-400">
              Stay connected through our social platforms.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/miraj.howlader.7127"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white/5 p-3 text-slate-300 transition hover:bg-cyan-500 hover:text-white"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white/5 p-3 text-slate-300 transition hover:bg-cyan-500 hover:text-white"
              >
                <BsTwitter size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/miraj-howlader-6b19ba352/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white/5 p-3 text-slate-300 transition hover:bg-cyan-500 hover:text-white"
              >
                <LiaLinkedin size={20} />
              </a>

              <a
                href="https://github.com/miraj-howlader"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white/5 p-3 text-slate-300 transition hover:bg-cyan-500 hover:text-white"
              >
                <BsGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} CORENET. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-slate-400 transition hover:text-cyan-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-sm text-slate-400 transition hover:text-cyan-400"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/support"
                className="text-sm text-slate-400 transition hover:text-cyan-400"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}