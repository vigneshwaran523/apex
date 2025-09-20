import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Apex Engineering</h3>
          <p className="text-sm text-gray-400">
            Building reliable engineering solutions with precision.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="flex items-center gap-2 text-gray-300">
            <Phone size={18} /> +91 89253 01739
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <Mail size={18} /> apeexengineering@gmail.com
          </p>

          {/* WhatsApp clickable link */}
          <a
            href="https://wa.me/917200811328"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-green-400"
          >
            <MessageCircle size={18} /> WhatsApp: +91 7200811328
          </a>

          <p className="flex items-center gap-2 text-gray-300">
            <MapPin size={18} /> 1/2 Balambigai Nagar,1st Main Road ramapuram Chennai-600089
          </p>
        </div>

        <div className="text-gray-400 text-sm flex items-end">
          © {new Date().getFullYear()} Apex Engineering. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
