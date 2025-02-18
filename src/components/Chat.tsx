import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X } from 'lucide-react';

export const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Olá! Sou o assistente virtual do Professor Ted. Como posso ajudar você a conhecer nossos serviços educacionais?", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput("");
    setIsTyping(true);

    const userMessage = input.toLowerCase();
    let response = "";

    if (userMessage.includes("aula particular") || userMessage.includes("individual")) {
      response = "O Professor Ted oferece atendimento individualizado para alunos do ensino fundamental e médio, com foco nas necessidades específicas de cada estudante.";
    } else if (userMessage.includes("neurodivergente") || userMessage.includes("tdah") || userMessage.includes("autismo")) {
      response = "O Professor Ted oferece atendimento especializado com aulas adaptadas para alunos neurodivergentes, respeitando suas necessidades específicas.";
    } else if (userMessage.includes("grupo") || userMessage.includes("turma")) {
      response = "O Professor Ted trabalha com grupos pequenos, oferecendo aulas em grupos reduzidos para garantir maior atenção individual a cada aluno.";
    } else if (userMessage.includes("prova") || userMessage.includes("vestibular") || userMessage.includes("avaliação")) {
      response = "O Professor Ted oferece auxílio específico para preparação de avaliações escolares e vestibulares, ajudando os alunos a se prepararem da melhor forma possível.";
    } else if (userMessage.includes("reforço") || userMessage.includes("dificuldade")) {
      response = "O Professor Ted disponibiliza suporte adicional através do reforço escolar para melhor compreensão do conteúdo escolar, ajudando a superar as dificuldades.";
    } else if (userMessage.includes("material") || userMessage.includes("recursos")) {
      response = "O Professor Ted trabalha com recursos didáticos personalizados para cada aluno, criando materiais adaptados que facilitam o aprendizado.";
    } else if (userMessage.includes("preço") || userMessage.includes("valor") || userMessage.includes("custo")) {
      response = "Para informações sobre valores, por favor, entre em contato diretamente com o Professor Ted. Ele adapta os preços de acordo com o plano de aulas mais adequado para você.";
    } else if (userMessage.includes("horário") || userMessage.includes("disponibilidade")) {
      response = "O Professor Ted pode conversar sobre os horários disponíveis que melhor se adequem à sua rotina. Entre em contato para verificar as possibilidades.";
    } else {
      response = "Olá! O Professor Ted é especializado em oferecer diversos serviços educacionais, incluindo aulas particulares, atendimento especializado para alunos neurodivergentes, grupos pequenos, preparação para provas, reforço escolar e material adaptado. Como posso ajudar você a conhecer melhor esses serviços?";
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1500);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-4 right-4 w-96 h-[500px] bg-gray-900 rounded-lg shadow-xl flex flex-col z-50"
          >
            <div className="p-4 bg-gray-800 text-white rounded-t-lg flex justify-between items-center border-b border-gray-700">
              <h3 className="font-semibold">Assistente do Professor Ted</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-gray-700 p-1 rounded-full transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-gray-800 text-gray-300 rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 p-3 rounded-lg rounded-bl-none">
                    <span className="flex space-x-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </span>
                  </div>
                </motion.div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-800 rounded-b-lg">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 p-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};