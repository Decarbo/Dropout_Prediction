import { motion } from "framer-motion";
import { CheckCircle, Rocket, TrendingUp, Users } from "lucide-react";

export default function Roadmap() {
  const roadmap = [
    {
      phase: "Phase 1",
      title: "Prototype (Hackathon)",
      desc: "Merge spreadsheets, apply rule-based thresholds, and send alerts.",
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    },
    {
      phase: "Phase 2",
      title: "Institute Rollout",
      desc: "Multi-class data upload, mentor dashboards, and guardian notifications.",
      icon: <Users className="w-8 h-8 text-indigo-500" />,
    },
    {
      phase: "Phase 3",
      title: "Advanced Insights",
      desc: "Batch-wise comparison, department-level reports, and heatmaps.",
      icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
    },
    {
      phase: "Phase 4",
      title: "Future Scope",
      desc: "Predictive analytics, mobile app, and integration with national edu platforms.",
      icon: <Rocket className="w-8 h-8 text-pink-500" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* subtle background gradient blobs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
          Product Roadmap
        </h2>

        <div className="relative">
          {/* vertical gradient line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 via-pink-400 to-purple-500 transform -translate-x-1/2"></div>

          <div className="space-y-20">
            {roadmap.map((item, idx) => (
              <motion.div
                key={idx}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? "flex-row-reverse" : "flex-row"
                }`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Card */}
                <div className="w-1/2 p-6 ml-4 bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl border border-white/40 hover:scale-101 hover:shadow-2xl transition transform duration-300">
                  <h3 className="text-xl p-2 font-semibold mb-2 text-indigo-600">
                    {item.phase}: {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>

                {/* Icon */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-4 border border-gray-100 z-10"
                  whileHover={{ scale: 0.8, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {item.icon}
                </motion.div>

                {/* Spacer */}
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
