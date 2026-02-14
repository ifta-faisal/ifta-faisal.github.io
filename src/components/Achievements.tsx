import React from "react";
import { Award, Calendar, MapPin } from "lucide-react";

const achievements = [
  {
    title: "Champion",
    subtitle: "Microprocessors and Microcontrollers Laboratory, CSE Project Showcase Summer 2025, UIU",
    year: "2025",
    location: "Dhaka, Bangladesh",
    color: "blue",
  },
  {
    title: "3rd Runners-up",
    subtitle: "System Analysis and Design Laboratory, CSE Project Showcase Summer 2025, UIU",
    year: "2025",
    location: "Dhaka, Bangladesh",
    color: "blue",
  },
  {
    title: "5th Position",
    subtitle: "University Rover Challenge 2024, Hanksville, Utah, USA",
    year: "2024",
    location: "Utah, USA",
    color: "green",
  },
  {
    title: "6th Position",
    subtitle: "University Rover Challenge 2025, Hanksville, Utah, USA",
    year: "2025",
    location: "Utah, USA",
    color: "green",
  },
  {
    title: "Best Science Team Award",
    subtitle: "University Rover Challenge 2025, Hanksville, Utah, USA",
    year: "2025",
    location: "Utah, USA",
    color: "green",
  },
  {
    title: "3rd Position",
    subtitle: "Anatolian Rover Challenge 2023, Ankara, Turkey",
    year: "2023",
    location: "Ankara, Turkey",
    color: "green",
  },
  {
    title: "Best Science Team Award",
    subtitle: "Anatolian Rover Challenge 2025, Ankara, Turkey",
    year: "2025",
    location: "Ankara, Turkey",
    color: "green",
  },
  {
    title: "Best Autonomous Team Award",
    subtitle: "Anatolian Rover Challenge 2025, Ankara, Turkey",
    year: "2025",
    location: "Ankara, Turkey",
    color: "green",
  },
  {
    title: "FAA Part 107 Certification",
    subtitle: "Successful Completion of FAA Part 107 Small UAS Recurrent",
    year: "2025",
    location: "USA",
    color: "purple",
  },
  {
    title: "Board Scholarship",
    subtitle: "Achieved Board Scholarship in JSC",
    year: "2015",
    location: "Bangladesh",
    color: "purple",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <h2 className="text-4xl font-bold text-center mb-12">Achievements & Success</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {achievements.map((item, index) => (
            <div key={index} className="relative pl-6 border-l-4"
              style={{
                borderColor:
                  item.color === "blue"
                    ? "#2563eb"
                    : item.color === "green"
                    ? "#22c55e"
                    : "#8b5cf6",
              }}
            >
              <div className="absolute -left-3 -top-1 bg-white">
                <Award
                  size={22}
                  className={
                    item.color === "blue"
                      ? "text-blue-600"
                      : item.color === "green"
                      ? "text-green-600"
                      : "text-purple-600"
                  }
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p
                className={`text-lg font-semibold mt-1 ${
                  item.color === "blue"
                    ? "text-blue-600"
                    : item.color === "green"
                    ? "text-green-600"
                    : "text-purple-600"
                }`}
              >
                {item.subtitle}
              </p>

              <div className="flex items-center gap-4 text-slate-600 text-sm mt-3">
                <span className="flex items-center gap-1">
                  <Calendar size={16} /> {item.year}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} /> {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
