"use client";

import React, { useState } from "react";
import Link from "next/link";
import { authClient, signOut } from "@/lib/auth-client";

interface NavbarProps {
  // Simulates your authentication context state
  isLoggedIn?: boolean; 
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
   const {data:session} = authClient.useSession()
   const isLoggedIn = !!session?.user;
  // Define route structures based on specification requirements
  const loggedOutRoutes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const loggedInRoutes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Add Item", path: "/add-items" },
    { name: "Manage Items", path: "/manage-items" },
  ];

  const activeRoutes = isLoggedIn ? loggedInRoutes : loggedOutRoutes;

  const handleLogout = async()=>{
    await signOut()
  }

  return (
    <nav className="sticky px-14 top-0 z-50 w-full bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-b border-white/10 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"/>
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT SIDE: Brand Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-emerald-400 flex items-center justify-center font-black text-white text-sm shadow-indigo-500/20 shadow-md group-hover:scale-105 transition-transform">
                Ω
              </div>
              <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                CORE<span className="text-blue-400">NET</span>
              </span>
            </Link>
          </div>

          {/* RIGHT SIDE: Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {activeRoutes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-150"
              >
                {route.name}
              </Link>
            ))}

            {/* Authentication Action Buttons */}
            <div className="flex items-center space-x-2 ml-4 border-l border-white/10 pl-4">
              {!isLoggedIn ? (
                <>
                  <Link
                    href="/login"
                    className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/20 transition-all duration-150"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button
                 onClick={handleLogout}
                  className="bg-white/10 hover:bg-red-600/20 text-slate-300 hover:text-red-400 px-4 py-2 rounded-xl text-sm font-medium border border-white/10 hover:border-red-500/30 transition-all duration-150"
                >
                  Logout
                </button>
              )}
            </div>
          </div>

          {/* MOBILE MENU BUTTON: Hamburger Icon */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open system menu</span>
              {isOpen ? (
  // Close Icon
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
) : (
  // Hamburger Icon
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)
}
          </button>
        </div>
      </div>

      {/* MOBILE INTERACTIVE DROPDOWN MENU */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-white/10`} id="mobile-menu">
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {activeRoutes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white hover:bg-white/5 block px-3 py-2.5 rounded-xl text-base font-medium transition"
            >
              {route.name}
            </Link>
          ))}
          
          <div className="pt-4 mt-2 border-t border-white/10 px-3 space-y-2">
            {!isLoggedIn ? (
              <div className="flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-slate-300 hover:text-white py-2 text-base font-medium transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-xl text-base font-semibold shadow-md transition"
                >
                  Register
                </Link>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full bg-red-600/10 hover:bg-red-600 text-red-400 hover:text-white py-2.5 rounded-xl text-base font-medium border border-red-500/20 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
    );
};
