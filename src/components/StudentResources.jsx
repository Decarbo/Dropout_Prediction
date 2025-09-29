"use client";
import { BookOpen, Headphones, Users, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentResources() {
  const resources = [
    {
      title: "Study Materials",
      desc: "Download curated notes, past question papers, and recommended books from trusted academic sources.",
      icon: <BookOpen className="w-10 h-10 text-indigo-600" />,
      link: "https://nptel.ac.in/courses", // NPTEL Courses
    },
    {
      title: "Counseling Support",
      desc: "Access online mentoring programs and professional counseling to help with academic and emotional challenges.",
      icon: <Users className="w-10 h-10 text-green-600" />,
      link: "https://manodarpan.education.gov.in/", // Govt. mental health portal
    },
    {
      title: "Video Lectures",
      desc: "Stream expert-led video lectures from IITs, MIT, and global educators to strengthen your concepts at your own pace.",
      icon: <Headphones className="w-10 h-10 text-pink-600" />,
      link: "https://ocw.mit.edu/", // MIT OpenCourseWare
    },
    {
      title: "Assignments & Guides",
      desc: "Stay on top of coursework with structured guides, solved examples, and assignment trackers.",
      icon: <FileText className="w-10 h-10 text-yellow-600" />,
      link: "https://cs50.harvard.edu/x/", // Harvard CS50
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 overflow-hidden">
      {/* Decorative background blobs */}
      <motion.div
        className="absolute top-20 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 20, -20, 0], y: [0, -15, 15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -25, 25, 0], y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-6 text-indigo-800 drop-shadow-sm"
        >
        Student Resources
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 mb-14 max-w-2xl mx-auto"
        >
          From structured study materials to mental health support, these resources
          ensure students have everything they need to excel and stay balanced.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
            >
              <div className="mb-4">{res.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-700">
                {res.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{res.desc}</p>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline font-medium"
              >
                Explore →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
