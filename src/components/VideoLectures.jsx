import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoLectures() {
  const lectures = [
    {
      title: "Calculus - Integration Basics",
      subject: "Mathematics",
      duration: "32 min",
      views: "12k views",
      thumbnail: "https://i.ytimg.com/vi/6An_ozEdE6w/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCHIrvpfaDUSCTG7chOVOouJIfmQg",
      link: "https://www.youtube.com/watch?v=x9cZ0G0lFCE",
    },
    {
      title: "Laws of Motion Explained",
      subject: "Physics",
      duration: "45 min",
      views: "18k views",
      thumbnail: "https://img.youtube.com/vi/kKKM8Y-u7ds/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=kKKM8Y-u7ds",
    },
    {
      title: "C Programming - Introduction",
      subject: "Computer Science",
      duration: "28 min",
      views: "25k views",
      thumbnail: "https://img.youtube.com/vi/KJgsSFOSQv0/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=KJgsSFOSQv0",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="text-3xl font-bold text-center mb-6">Video Lectures</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Watch curated video lectures to strengthen your understanding of core subjects.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {lectures.map((lec, idx) => (
            <motion.a
              key={idx}
              href={lec.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              {/* Thumbnail */}
              <img
                src={lec.thumbnail}
                alt={lec.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay with play icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <PlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
              </div>

              {/* Info section */}
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-800 line-clamp-2">{lec.title}</h3>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-xs">
                    {lec.subject}
                  </span>
                  <span>{lec.duration} • {lec.views}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
