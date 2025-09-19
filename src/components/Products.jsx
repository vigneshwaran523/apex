import React from "react";
import { asserts } from "../assets/assets"; // adjust path if needed

const products = [
  { 
    name: "MS Working Table", 
    desc: "Sturdy mild steel tables designed for heavy-duty industrial use.", 
    image: asserts.pro1
  },
  { 
    name: "Aluminium Table", 
    desc: "Lightweight yet robust aluminium tables for multipurpose applications.", 
    image: asserts.pro2
  },
  { 
    name: "S.S Pipe Working Table", 
    desc: "Corrosion-resistant stainless steel tables for cleanroom and industrial use", 
    image: asserts.pro3
  },
  { 
    name: "Aluminum Nylon Hand Trolley", 
    desc: " Easy-to-move hand trolley with strong aluminium frame and nylon wheels.", 
    image: asserts.pro4
  },
  { 
    name: "Bin Picking Trolley", 
    desc: "Convenient trolley designed for material handling and storage efficiency.", 
    image: asserts.pro5
  },
  { 
    name: "ABS Pipe Trolley", 
    desc: " Modular ABS pipe-based trolley for lightweight transport needs", 
    image: asserts.pro6
  },
  { 
    name: "Tray Slider Trolley", 
    desc: " Multi-level tray system trolley for organized material handling.", 
    image: asserts.pro7
  },
  { 
    name: "Rolling Bin Rack", 
    desc: "Mobile rack system for easy storage and movement of bins.", 
    image: asserts.pro8
  },
  { 
    name: "Tier Rolling Tool Cart", 
    desc: "Multi-tier tool cart for efficient tool organization and mobility.", 
    image: asserts.pro9
  },
  { 
    name: "Award Display Rack", 
    desc: "Elegant rack designed to showcase awards and recognitions.", 
    image: asserts.pro10
  },
  { 
    name: "MS Filing Cabinet", 
    desc: " Secure and spacious cabinet for document storage and filing.", 
    image: asserts.pro11
  },
  { 
    name: "High Bookcase", 
    desc: " Tall shelving unit for storing and displaying books or files.", 
    image: asserts.pro12
  },
  { 
    name: "Benches & Desks", 
    desc: "Comfortable and durable seating and desks for workspaces.", 
    image: asserts.pro13
  },
  { 
    name: "Fire Extinguisher Box", 
    desc: "Safety box designed to securely store and protect fire extinguishers.", 
    image: asserts.pro14
  },
  { 
    name: "Laser Cutting Plates", 
    desc: "Precision-cut metal plates tailored for custom industrial requirements.", 
    image: asserts.pro15
  },
  { 
    name: "Folding Plate", 
    desc: "Foldable and space-saving plate solution for versatile use.", 
    image: asserts.pro16
  },
  { 
    name: "Acrylic Box ", 
    desc: "Transparent and durable acrylic box for display or storage.", 
    image: asserts.pro17
  },
  { 
    name: "Acrylic & PC Laser Cutting", 
    desc: "Custom laser-cut acrylic and polycarbonate solutions.",
    image: asserts.pro18
  },
  { 
    name: "Tools with Workbench", 
    desc: "Heavy-duty workbench integrated with tool storage.", 
    image: asserts.pro19
  },
  { 
    name: "Machinery Cabin", 
    desc: "Enclosed cabins designed for machinery safety and operation.", 
    image: asserts.pro20
  },
  { 
    name: "Locked Ballot Box", 
    desc: "Secure ballot box with locking system for elections or collections",  
    image: asserts.pro21
  },
  { 
    name: "Roller Conveyors", 
    desc: "Efficient roller conveyor systems for smooth material flow.", 
    image: asserts.pro22
  },
  { 
    name: "Pallet Trolley", 
    desc: "Sturdy trolley for easy handling and movement of pallets.", 
    image: asserts.pro23
  },
  { 
    name: "Propan Tank Cage", 
    desc: "Safe and secure cage for storing propane cylinders.", 
    image: asserts.pro24
  },
];

const Products = () => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
        Our Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-contain mb-4 rounded-md"
            />
            
            {/* Product Name */}
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2">
              {item.name}
            </h3>
            
            {/* Product Description */}
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
