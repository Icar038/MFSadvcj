import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";
import sid from "../assets/sid.jpeg"
import vinmerson from "../assets/vinmerson.jpeg"
import icaro from "../assets/icaro.jpeg"
import rafaela from "../assets/rafaela.jpeg"
import foto from "../assets/fotoprincipal.png"

const Lawyers = () => {
  const lawyers = [
    {
        id: 1,
        name: "Rafaela Nascimento",
        specialization: "Corporate Law",
        bio: "15+ years of experience in corporate law and mergers & acquisitions. Expert in international business law and regulatory compliance.",
        image: rafaela,
        linkedin: "#",
        email: "sarah.mitchell@law.com",
        phone: "+1 (555) 123-4567"
      },
    {
      id: 2,
      name: "Icaro França",
      specialization: "Corporate Law",
      bio: "15+ years of experience in corporate law and mergers & acquisitions. Expert in international business law and regulatory compliance.",
      image: icaro,
      linkedin: "#",
      email: "sarah.mitchell@law.com",
      phone: "+1 (555) 123-4567"
    },
    {
      id: 3,
      name: "Sidnei Marques",
      specialization: "Criminal Defense",
      bio: "Former district attorney with 20+ years of experience in criminal defense. Specialized in high-profile cases and jury trials.",
      image: sid,
      linkedin: "#",
      email: "james.richardson@law.com",
      phone: "+1 (555) 234-5678"
    },
    {
      id: 4,
      name: "Vinmerson Freitas",
      specialization: "Family Law",
      bio: "Dedicated family law attorney with expertise in divorce, custody, and domestic relations. Certified mediator and child advocate.",
      image: vinmerson,
      linkedin: "#",
      email: "elena.rodriguez@law.com",
      phone: "+1 (555) 345-6789"
    }
  ];

  const [selectedLawyer, setSelectedLawyer] = useState(null);

  const LawyerCard = ({ lawyer }) => (
    <div
      className="bg-white hover:bg-gray-50 transition-all duration-300 mb-6 p-6"
      onClick={() => setSelectedLawyer(lawyer)}
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-64 h-64 flex-shrink-0">
          <img
            src={lawyer.image}
            alt={lawyer.name}
            className="w-full h-full object-cover transition-all duration-300 hover:grayscale"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf";
            }}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{lawyer.name}</h2>
          <p className="text-blue-600 font-semibold mb-4">{lawyer.specialization}</p>
          <p className="text-gray-600 mb-6">{lawyer.bio}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={lawyer.instagram}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaInstagram className="text-xl" />
              <span>Instagram</span>
            </a>
            <a
              href={`mailto:${lawyer.email}`}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaEnvelope className="text-xl" />
              <span>Email</span>
            </a>
            <a
              href={`tel:${lawyer.phone}`}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaPhone className="text-xl" />
              <span>Contato</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section id="home" className="relative h-screen -mt-16">
        <div className="relative h-full">
          <div className="absolute inset-0">
            <img
              src={foto}
              alt="Law Office"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/1920x1080?text=Law+Office";
              }}
            />
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Nossos Advogados</h1>
              <p className="text-xl md:text-2xl mb-8">Excellence in Legal Services Across Brazil</p>
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {lawyers.map((lawyer) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>
        {selectedLawyer && (
          <DetailedView
            lawyer={selectedLawyer}
            onClose={() => setSelectedLawyer(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Lawyers;