"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      text: "Upload spreadsheets (attendance, scores, fees).",
      icon: "mdi:file-upload-outline",
      color: "from-blue-500 to-indigo-500"
    },
    {
      step: "2",
      text: "System merges data and applies rules.",
      icon: "mdi:cog-outline",
      color: "from-emerald-500 to-green-500"
    },
    {
      step: "3",
      text: "Dashboard highlights at-risk students.",
      icon: "mdi:view-dashboard-outline",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "4",
      text: "Mentors/parents get notified weekly.",
      icon: "mdi:bell-ring-outline",
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-slate-900">
          How It Works
        </h2>

        <div className="grid gap-10 md:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl shadow-lg bg-white relative overflow-hidden group"
            >
              {/* Background gradient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-10 group-hover:opacity-20 transition duration-500`}
              ></div>

              {/* Step number */}
              <div className="text-6xl font-extrabold text-slate-200 absolute top-4 left-4">
                {s.step}
              </div>

              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-r ${s.color} shadow-lg`}
              >
                <Icon icon={s.icon} className="text-white text-3xl" />
              </div>

              {/* Text */}
              <p className="text-gray-700 font-medium relative z-10">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
