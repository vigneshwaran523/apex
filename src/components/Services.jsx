import React from "react";
import { Wrench, Hammer, Layers, Box, PaintBucket, Settings } from "lucide-react";

const services = [
  { icon: <Wrench size={32} />, text: "Fabrication for factories, warehouses, and offices." },
  { icon: <Hammer size={32} />, text: "Welding Works - TIG, MIG & Arc welding expertise." },
  { icon: <Layers size={32} />, text: "Sheet Metal Fabrication - Panels, ducts, frames." },
  { icon: <Box size={32} />, text: "Aluminium Extrusion Works - structures, tables, trolleys." },
  { icon: <PaintBucket size={32} />, text: "Surface Finishing - Powder coating, polishing, anodizing." },
  { icon: <Settings size={32} />, text: "Assembly & Installation - On-site project execution." },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-blue-600">{srv.icon}</div>
            <p className="text-gray-700">{srv.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
