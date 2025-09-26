"use client";
import { motion } from "framer-motion";
import { AlertTriangle, Mail, Bell } from "lucide-react";

export default function NotificationsPreview() {
  const notifications = [
    {
      type: "Attendance Alert",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      message: "⚠️ Student Rahul – Attendance dropped to 62% this week.",
      time: "2h ago",
    },
    {
      type: "Score Alert",
      icon: <Bell className="w-6 h-6 text-yellow-500" />,
      message: "⚠️ Student Priya – Test scores have decreased for 3 weeks straight.",
      time: "1 day ago",
    },
    {
      type: "Fee Reminder",
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      message: "ℹ️ Student Amit – Fee installment is still pending.",
      time: "3 days ago",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Notifications Preview
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Here’s how mentors and guardians receive timely alerts to intervene early and support students.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {notifications.map((note, idx) => (
            <motion.div
              key={idx}
              className="relative p-6 rounded-3xl shadow-xl bg-white/60 backdrop-blur-xl border border-white/20 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon circle with gradient */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-indigo-200 to-pink-200">
                  {note.icon}
                </div>
                <span className="font-semibold text-gray-800">{note.type}</span>
              </div>

              <p className="text-gray-700 mb-3">{note.message}</p>
              <span className="text-sm text-gray-500">{note.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
