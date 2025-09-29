"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [role, setRole] = useState("student"); 
  const [form, setForm] = useState({
    name: "",
    regNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", { ...form, role });
    alert(`Logged in as ${role.toUpperCase()}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-4">
      <motion.div
        className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Role Toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setRole("student")}
            className={`px-4 py-2 rounded-l-xl transition ${
              role === "student"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setRole("teacher")}
            className={`px-4 py-2 rounded-r-xl transition ${
              role === "teacher"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Teacher
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block text-sm font-medium text-gray-600">Registration Number</label>
            <input
              type="text"
              name="regNumber"
              value={form.regNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
          >
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
