import { useState } from "react";
import { PaperPlane, ChatCircleText, X, Bell, InstagramLogo, WhatsappLogo } from "phosphor-react";

const responses = {
  "Como funciona a consultoria jurídica?":
    "A consultoria jurídica funciona através de uma análise personalizada do seu caso, oferecendo orientações estratégicas e soluções legais.",
  "Quais áreas do direito você atende?":
    "Atendemos Direito Civil, Trabalhista, do Consumidor, Penal, Empresarial e de Família.",
  "Quanto tempo leva para receber um retorno?":
    "Nosso prazo de resposta é rápido, geralmente dentro de 24 horas.",
  "Quero entrar em contato": "Envie mensagem para o número de telefone (71) 9 9988-4374",
};

export default function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá! Como posso ajudar?", fromUser: false },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { text: message, fromUser: true }]);
    setInput("");

    setTimeout(() => {
      const responseText = responses[message] || "Desculpe, não entendi sua solicitação.";
      setMessages((prev) => [...prev, { text: responseText, fromUser: false }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-3">
      <button
        onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-transform transform hover:scale-110"
      >
        <Bell size={24} />
      </button>
      {isOptionsOpen && (
        <div className="space-y-3 flex flex-col items-end transition-opacity duration-300">
          <button
            onClick={() => { setIsChatOpen(true); setIsOptionsOpen(false); }}
            className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-transform transform hover:scale-110"
          >
            <ChatCircleText size={24} />
          </button>
          <button
            onClick={() => window.open("https://www.instagram.com/vinmerson.adv", "_blank")}
            className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-400 transition-transform transform hover:scale-110"
          >
            <InstagramLogo size={24} />
          </button>
          <button
            onClick={() => window.open("https://wa.me/5571986742059", "_blank")}
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-400 transition-transform transform hover:scale-110"
          >
            <WhatsappLogo size={24} />
          </button>
        </div>
      )}
      {isChatOpen && (
        <div className="fixed bottom-16 right-4 bg-white w-80 h-96 p-4 shadow-lg rounded-lg border border-gray-300 flex flex-col">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="text-lg font-semibold text-blue-900">Atendimento Online</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-gray-600">
              <X size={20} />
            </button>
          </div>

          <div className="text-gray-700 flex-1 overflow-y-auto p-2 space-y-3 bg-gray-100 rounded-lg flex flex-col">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg shadow max-w-max ${msg.fromUser ? "bg-blue-500 text-white self-end" : "bg-white self-start"}`}
              >
                {msg.text}
              </div>
            ))}
            <div className="grid grid-cols-1 gap-2 mt-2">
              {Object.keys(responses).map((option) => (
                <button
                  key={option}
                  className="bg-gray-200 p-2 rounded text-sm hover:bg-gray-300"
                  onClick={() => handleSendMessage(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-2 border-t pt-2 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border p-2 rounded"
              placeholder="Digite aqui..."
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="bg-blue-900 text-white p-2 rounded"
            >
              <PaperPlane size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
