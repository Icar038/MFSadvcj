import React from 'react'
import foto from "../assets/fotoprincipal.png"

const Interns = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Seja nosso Estagiario</h1>
              <p className="text-xl md:text-2xl mb-8">Excellence in Legal Services Across Brazil</p>
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
        <div className="max-w-4xl mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Seja um Estagiário</h2>
            <form className="bg-white p-6 rounded-lg shadow-lg">
                <label className="block mb-2 font-semibold">Nome</label>
                <input type="text" className="w-full border p-2 rounded mb-4" />

                <label className="block mb-2 font-semibold">Email</label>
                <input type="email" className="w-full border p-2 rounded mb-4" />

                <label className="block mb-2 font-semibold">Telefone</label>
                <input type="tel" className="w-full border p-2 rounded mb-4" />

                <label className="block mb-2 font-semibold">Área de Interesse</label>
                <input type="text" className="w-full border p-2 rounded mb-4" />

                <button className="w-full bg-primary text-white py-2 rounded">Enviar</button>
            </form>
        </div>
        </div>
    );
};

export default Interns;