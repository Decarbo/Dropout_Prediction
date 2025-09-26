import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

export default function ForStudents() {
  const data = [
    { subject: "Math", score: 78 },
    { subject: "Physics", score: 65 },
    { subject: "Chemistry", score: 72 },
    { subject: "CS", score: 90 },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Chart Section */}
        <motion.div
          className="flex-1 p-6 rounded-3xl shadow-xl bg-white/70 backdrop-blur-xl border border-white/30 hover:scale-105 transition transform duration-300"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Your Progress</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="subject" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="score" fill="#10b981" animationDuration={1000} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-green-600">For Students</h2>
          <p className="text-gray-600 mb-6">
            Keep track of your performance across subjects. See where you excel and where you can improve so you can stay on top of your learning.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
            Student Login
          </button>
        </motion.div>
      </div>
    </section>
  );
}
