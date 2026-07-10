"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // Simulate API request
  try {
    const {data,error} = await authClient.signIn.email({
         email: formData.email,
        password: formData.password,
    })
    if(data){
      toast.success("Login Successfully")
      router.push('/')
       setLoading(false);
     }
     if (error) {
      toast.error(error.message);
      setLoading(false);
      
      return;
    }
   

  } catch (error) {
    console.log(error)
  }
  };


  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-3xl font-bold text-white shadow-lg">
            C
          </div>

          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-400">
            Sign in to continue to your account
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Email Address
              </label>

              <input
                type="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 pr-14 text-white placeholder-gray-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-cyan-400 hover:text-cyan-300"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="h-px flex-1 bg-white/20" />
            <span className="px-3 text-sm text-gray-400">
              OR
            </span>
            <div className="h-px flex-1 bg-white/20" />
          </div>

         
          {/* Register */}
          <p className="text-center text-gray-300 mt-4">
            Dont have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}