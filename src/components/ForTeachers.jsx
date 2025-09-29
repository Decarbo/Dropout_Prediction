"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

export default function ForTeachers() {
  const data = [
    { subject: "Math", attempts: 2 },
    { subject: "Physics", attempts: 4 },
    { subject: "Chemistry", attempts: 3 },
    { subject: "CS", attempts: 1 },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-56 h-56 md:w-72 md:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-56 h-56 md:w-72 md:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-indigo-700">For Teachers</h2>
          <p className="text-gray-600 mb-6 sm:text-lg">
            Quickly see subjects where students struggle the most and intervene with targeted help.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
            Teacher Login
          </button>
        </motion.div>

        {/* Chart Section */}
        <motion.div
          className="flex-1 w-full p-4 md:p-6 rounded-3xl shadow-xl bg-white/70 backdrop-blur-xl border border-white/30 hover:scale-105 transition transform duration-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 text-center">
            Student Struggle Insights
          </h3>
          <div className="h-64 sm:h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
                <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="attempts" fill="#6366f1" animationDuration={1000} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
