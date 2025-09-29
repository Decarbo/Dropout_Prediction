import { ClipboardList, Calendar, FileText } from "lucide-react";

export default function AssignmentsGuides() {
  const assignments = [
    {
      title: "Math Assignment 1",
      due: "30 Sept 2025",
      desc: "Calculus problems on differentiation and integration.",
      icon: <ClipboardList className="w-6 h-6 text-indigo-600" />,
      link: "#",
    },
    {
      title: "Physics Lab Report",
      due: "02 Oct 2025",
      desc: "Experiment write-up on Newton’s laws & friction.",
      icon: <FileText className="w-6 h-6 text-green-600" />,
      link: "#",
    },
    {
      title: "C Programming Guide",
      due: "Download Anytime",
      desc: "Step-by-step reference for beginners in C language.",
      icon: <FileText className="w-6 h-6 text-pink-600" />,
      link: "#",
    },
   //  {
   //    title: "Thermodynamics Assignment",
   //    due: "05 Oct 2025",
   //    desc: "Problem set on heat transfer and entropy.",
   //    icon: <ClipboardList className="w-6 h-6 text-yellow-600" />,
   //    link: "#",
   //  },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Assignments & Guides</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Keep track of upcoming assignments and download helpful study guides to stay on top of your coursework.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {assignments.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm flex-1">{item.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" /> {item.due}
                </span>
                <a
                  href={item.link}
                  className="text-indigo-600 hover:underline font-medium text-sm"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
