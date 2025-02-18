import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyBWRFcfjE_PV-iJv98KTyFPWjmzAesQJAk');

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

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      const prompt = `Você é o assistente virtual do Professor Ted, um professor de matemática especializado em ensino personalizado e inclusivo.
      
      Informações sobre os serviços:
      - Aulas particulares: Atendimento individualizado para alunos do ensino fundamental e médio
      - Atendimento especializado: Aulas adaptadas para alunos neurodivergentes
      - Grupos pequenos: Aulas em grupos reduzidos
      - Preparação para provas: Auxílio específico para avaliações escolares e vestibulares
      - Reforço escolar: Suporte adicional para compreensão do conteúdo
      - Material adaptado: Recursos didáticos personalizados
      
      Pergunta do usuário: ${input}
      
      Responda de forma amigável e profissional, mantendo o tom de assistente virtual.`;

      const result = await model.generateContent(prompt);
      const response = result.response.text();
      
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { text: response, isUser: false }]);
      }, 1500);
    } catch (error) {
      console.error('Erro ao gerar resposta:', error);
      const fallbackResponse = "Desculpe, estou tendo dificuldades técnicas no momento. Por favor, tente novamente mais tarde ou entre em contato diretamente com o Professor Ted.";
      
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { text: fallbackResponse, isUser: false }]);
      }, 1500);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50"
      >
        <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 right-0 w-full md:bottom-4 md:right-4 md:w-96 h-[80vh] md:h-[500px] bg-gray-900 rounded-t-lg md:rounded-lg shadow-xl flex flex-col z-50"
          >
            <div className="p-3 md:p-4 bg-gray-800 text-white rounded-t-lg flex justify-between items-center border-b border-gray-700">
              <h3 className="font-semibold text-sm md:text-base">Assistente do Professor Ted</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-gray-700 p-1 rounded-full transition-colors duration-300"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gray-900">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-[80%] p-2 md:p-3 rounded-lg text-sm md:text-base ${
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
                  <div className="bg-gray-800 p-2 md:p-3 rounded-lg rounded-bl-none">
                    <span className="flex space-x-1">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </span>
                  </div>
                </motion.div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-3 md:p-4 border-t border-gray-700 bg-gray-800 rounded-b-lg">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 p-2 bg-gray-700 text-white text-sm md:text-base placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};