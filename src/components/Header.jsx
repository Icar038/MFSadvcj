import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoInicial from "../assets/LOGO mfs.png"; // Logo inicial
import logoRolagem from "../assets/LOGO2 mfs.png"; // Logo ao rolar

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? "bg-blue-950 md:bg-blue-950 bg-black bg-opacity-50 shadow-md py-4" : "bg-transparent py-8"
            }`}
        >
            {!isScrolled && (
                <div className="bg-transparent text-white py-2 border-b border-blue-950 w-full hidden md:block">
                    <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                        <div className="flex space-x-2 text-sm">
                            <span>Contato</span>
                            <span>Oportunidades</span>
                            <span>Intranet</span>
                            <span>Acessibilidade:</span>
                            <button className="bg-white text-blue-500 px-1 py-0.5 rounded">A</button>
                            <button className="bg-white text-blue-500 px-1 py-0.5 rounded">A</button>
                            <button className="bg-white text-blue-500 px-1 py-0.5 rounded">+</button>
                            <button className="bg-white text-blue-500 px-1 py-0.5 rounded">-</button>
                        </div>
                    </div>
                </div>
            )}

            <div className={`w-full ${isScrolled ? "" : "border-b border-blue-950"}`}>
                <div className={`max-w-6xl mx-auto px-6 flex justify-between items-center ${
                    isScrolled ? "py-4" : "py-8"
                }`}>
                    
                    {/* Logo e Nome */}
                    <div className="flex items-center">
                        <img src={isScrolled ? logoRolagem : logoInicial} alt="Logo" className="h-10 mr-2 transition-all duration-300" />
                        <span className={`font-bold text-lg transition-all duration-300 ${
                            isScrolled ? "text-white" : "text-[#C4A05E]"
                        }`}>
                            Marques França e Santos
                        </span>
                    </div>

                    {/* Botão de abrir/fechar menu no mobile */}
                    <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
                        {isMenuOpen ? "✖" : "☰"}
                    </button>

                    {/* Navegação: Normal no desktop, abaixo da logo no mobile */}
                    <nav className={`md:flex ${isMenuOpen ? "absolute top-full left-0 w-full bg-blue-950 text-white py-4" : "hidden"} md:block md:relative md:bg-transparent`}>
                        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-white text-center md:text-left">
                            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link></li>
                            <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Serviços</Link></li>
                            <li><Link to="/lawyers" onClick={() => setIsMenuOpen(false)}>Advogados</Link></li>
                            <li><Link to="/interns" onClick={() => setIsMenuOpen(false)}>Estágio</Link></li>
                            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;
