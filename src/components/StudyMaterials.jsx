"use client";
import { BookOpen, FileText, Video, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

export default function StudyMaterials() {
  const materials = [
    {
      subject: "Mathematics",
      resources: [
        { type: "Notes", icon: <BookOpen className="w-6 h-6 text-indigo-600" />, link: "https://ncert.nic.in/textbook.php?lemh1=0-9" },
        { type: "Question Papers", icon: <FileText className="w-6 h-6 text-green-600" />, link: "https://gate.iitkgp.ac.in/" },
        { type: "Video Lectures", icon: <Video className="w-6 h-6 text-pink-600" />, link: "https://nptel.ac.in/courses/111" },
        { type: "Assignments", icon: <ClipboardList className="w-6 h-6 text-yellow-600" />, link: "https://ocw.mit.edu/courses/mathematics/" },
      ],
    },
    {
      subject: "Physics",
      resources: [
        { type: "Notes", icon: <BookOpen className="w-6 h-6 text-indigo-600" />, link: "https://ncert.nic.in/textbook.php?leph1=0-8" },
        { type: "Question Papers", icon: <FileText className="w-6 h-6 text-green-600" />, link: "https://www.iitb.ac.in/en/education/previous-exam-papers" },
        { type: "Video Lectures", icon: <Video className="w-6 h-6 text-pink-600" />, link: "https://nptel.ac.in/courses/115" },
      ],
    },
    {
      subject: "Computer Science",
      resources: [
        { type: "Notes", icon: <BookOpen className="w-6 h-6 text-indigo-600" />, link: "https://cs50.harvard.edu/x/" },
        { type: "Guides", icon: <ClipboardList className="w-6 h-6 text-yellow-600" />, link: "https://www.geeksforgeeks.org/" },
        { type: "Video Tutorials", icon: <Video className="w-6 h-6 text-pink-600" />, link: "https://nptel.ac.in/courses/106" },
      ],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-indigo-100">
      {/* Animated blobs in background */}
      <motion.div
        className="absolute top-10 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ scale: [1, 1.1, 0.9, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-6 text-indigo-800 drop-shadow-sm"
        >
          Study Materials
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-14"
        >
          Access organized resources for every subject: notes, past papers, assignments, and video lectures — everything you need to excel.
        </motion.p>

        {/* Subject Blocks */}
        <div className="space-y-12">
          {materials.map((subject, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition relative z-10 overflow-hidden"
            >
              <h3 className="text-2xl font-semibold mb-6 text-indigo-700">
                {subject.subject}
              </h3>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {subject.resources.map((res, rIdx) => (
                  <motion.a
                    key={rIdx}
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.07, rotate: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-5 bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-md border hover:border-indigo-500 transition flex items-center gap-3"
                  >
                    {res.icon}
                    <span className="text-gray-800 font-medium">{res.type}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
