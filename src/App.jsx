import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Lawyers from "./pages/lawyers";
import Interns from "./pages/Interns";
import Contact from "./pages/Contact";
import ChatBot from "./components/chatbot";
import Acessibilidade from "./components/Acessibilidade";
import VLibras from "@djpfs/react-vlibras"

const App = () => {
    return (
        <Router>
            <Header />
            <VLibras forceOnload={true} />
            <main className="pt-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                 {/*   <Route path="/about" element={<About />} /> */}
                    <Route path="/services" element={<Services />} />
                    <Route path="/lawyers" element={<Lawyers />} />
                    <Route path="/interns" element={<Interns />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            
            <ChatBot/>
            <Footer />
        </Router>
    );
};

export default App;