import React from "react";
import { Award, Calendar, MapPin } from "lucide-react";

const achievements = [
  {
    title: "Champion",
    subtitle: "Microprocessors and Microcontrollers Laboratory, CSE Project Showcase Summer 2025, UIU",
    year: "2025",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "3rd Runners-up",
    subtitle: "System Analysis and Design Laboratory, CSE Project Showcase Summer 2025, UIU",
    year: "2025",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "5th Position",
    subtitle: "University Rover Challenge 2024, Hanksville, Utah, USA",
    year: "2024",
    location: "Utah, USA",
  },
  {
    title: "6th Position",
    subtitle: "University Rover Challenge 2025, Hanksville, Utah, USA",
    year: "2025",
    location: "Utah, USA",
  },
  {
    title: "Best Science Team Award",
    subtitle: "University Rover Challenge 2025, Hanksville, Utah, USA",
    year: "2025",
    location: "Utah, USA",
  },
  {
    title: "3rd Position",
    subtitle: "Anatolian Rover Challenge 2023, Ankara, Turkey",
    year: "2023",
    location: "Ankara, Turkey",
  },
  {
    title: "Best Science Team Award",
    subtitle: "Anatolian Rover Challenge 2025, Ankara, Turkey",
    year: "2025",
    location: "Ankara, Turkey",
  },
  {
    title: "Best Autonomous Team Award",
    subtitle: "Anatolian Rover Challenge 2025, Ankara, Turkey",
    year: "2025",
    location: "Ankara, Turkey",
  },
  {
    title: "FAA Part 107 Certification",
    subtitle: "Successful Completion of FAA Part 107 Small UAS Recurrent",
    year: "2025",
    location: "USA",
  },
  {
    title: "Board Scholarship",
    subtitle: "Achieved Board Scholarship in JSC",
    year: "2015",
    location: "Bangladesh",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-black/60">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Achievements & Success</h2>
        <div className="w-full h-[2px] bg-white/30 mb-12 relative z-10"></div>

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          {achievements.map((item, index) => (
            <div key={index} className="relative pl-6 border-l-4 border-orange-500">
              <div className="absolute -left-3 -top-1 bg-[#0a0a0a]">
                <Award size={22} className="text-orange-500" />
              </div>

              <h3 className="text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-lg font-semibold mt-1 text-orange-500">
                {item.subtitle}
              </p>

              <div className="flex items-center gap-4 text-neutral-400 text-sm mt-3">
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
