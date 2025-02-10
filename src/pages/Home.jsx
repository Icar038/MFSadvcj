import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGavel, FaHome, FaBalanceScale, FaBuilding, FaUserShield } from "react-icons/fa";
import foto from "../assets/fotoprincipal.png"

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const practiceAreas = [
    {
      title: "Criminal Law",
      icon: <FaGavel className="titlecard" />,
      description: "Expert defense in criminal cases with a focus on client rights and justice."
    },
    {
      title: "Civil Law",
      icon: <FaBalanceScale className="titlecard" />,
      description: "Comprehensive civil litigation services for individuals and businesses."
    },
    {
      title: "Consumer Rights",
      icon: <FaUserShield className="titlecard" />,
      description: "Protecting consumer interests and ensuring fair treatment."
    },
    {
      title: "Real Estate",
      icon: <FaBuilding className="titlecard" />,
      description: "Expert guidance in property law and real estate transactions."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
     

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
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Marques França Santos Advogados</h1>
        <p className="text-xl md:text-2xl mb-8">Excellence in Legal Services Across Brazil</p>
        <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Schedule Consultation
        </button>
      </div>
    </div>
  </div>
</section>
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="titlesection">Sobre nosso escritorio</h2>
              <p className="text-gray-600 mb-6">
              Fundado em 2022, nosso escritório de advocacia tem se destacado pela excelência, comprometimento e resultados positivos para nossos clientes. Desde o início de nossa trajetória, conquistamos êxito em diversas causas, sempre pautados pela ética, transparência e um atendimento personalizado.

Localizado em Salvador, na R. São Marcos, 73 - São Marcos, buscamos oferecer soluções jurídicas eficientes e estratégicas, garantindo a melhor defesa dos interesses de nossos clientes. Nossa reputação é fortalecida pelas recomendações e pela confiança que conquistamos ao longo dos anos, resultado de um trabalho sério e dedicado.

Seja qual for a sua necessidade jurídica, estamos preparados para oferecer suporte especializado e eficaz. Conte com a nossa experiência para proteger seus direitos e alcançar os melhores resultados.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Experience</h3>
                  <p className="text-gray-600">20+ Years</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Success Rate</h3>
                  <p className="text-gray-600">98%</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
                alt="Law Team"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x400?text=Law+Team";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="titlesection">Areas de Atuação</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-center">
                  {area.icon}
                  <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="titlesection">Localização do Escritorio</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="h-96 bg-gray-200 rounded-lg">
              {/* Add Google Maps iframe here */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.245726123456!2d-38.456789!3d-12.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a123456789ab%3A0xcdef1234567890!2sRua%20S%C3%A3o%20Marcos%2C%2073%2C%20S%C3%A3o%20Marcos%2C%20Salvador%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1610000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-800" />
                  <div>
                    <h3 className="font-bold">Endereço</h3>
                    <p className="text-gray-600">R. São Marcos, 73 - São Marcos, Salvador - BA, 41253-281</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-2xl text-blue-800" />
                  <div>
                    <h3 className="font-bold">Telefone</h3>
                    <p className="text-gray-600">+55 (71) 98286-6985</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-2xl text-blue-800" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">contact@lawfirm.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="titlesection">Entre em Contato</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                class="w-full p-2 border border-gray-300 rounded h-32 resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;
