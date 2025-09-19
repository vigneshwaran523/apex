import React from "react";
import { asserts } from "../assets/assets"; // adjust path for your project images

const projects = [
  { title: "Rollers Conveyors", desc: "Efficient roller conveyor systems for smooth material flow.", image: asserts.pro22 },
  { title: "M S Working Table", desc: "Sturdy mild steel tables designed for heavy-duty industrial use.", image: asserts.pro1 },
  { title: "ABS Pipe Trolley ", desc: " Modular ABS pipe-based trolley for lightweight transport needs.", image: asserts.pro6 },
  { title: "Locking ballot Box", desc: "Secure ballot box with locking system for elections or collections.", image: asserts.pro21 },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Our Projects
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            {/* Project Image */}
            <img
              src={p.image}
              alt={p.title}
              className="h-40 w-full object-contain mb-4 rounded-md"
            />

            {/* Project Title */}
            <h3 className="font-semibold mb-2">{p.title}</h3>

            {/* Project Description */}
            <p className="text-sm text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
