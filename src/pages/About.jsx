import React from 'react';
import foto from "../assets/fotoprincipal.png"

const About = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Sobre Nós</h1>
              <p className="text-xl md:text-2xl mb-8">Fundado em 2022, nosso escritório de advocacia tem se destacado pela excelência, comprometimento e resultados positivos para nossos clientes. Desde o início de nossa trajetória, conquistamos êxito em diversas causas, sempre pautados pela ética, transparência e um atendimento personalizado.

Localizado em Salvador, na R. São Marcos, 73 - São Marcos, buscamos oferecer soluções jurídicas eficientes e estratégicas, garantindo a melhor defesa dos interesses de nossos clientes. Nossa reputação é fortalecida pelas recomendações e pela confiança que conquistamos ao longo dos anos, resultado de um trabalho sério e dedicado.

Seja qual for a sua necessidade jurídica, estamos preparados para oferecer suporte especializado e eficaz. Conte com a nossa experiência para proteger seus direitos e alcançar os melhores resultados.</p>
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
                With decades of combined experience, our team of dedicated legal professionals
                is committed to providing exceptional service and achieving the best possible
                outcomes for our clients across Brazil.
              </p>
             
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;