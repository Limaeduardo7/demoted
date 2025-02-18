import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, BrainCircuit, GraduationCap } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2070"
          alt="Matemática Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Aprenda Matemática de Forma <span className="text-blue-400">Única</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-300 mb-12"
          >
            Ensino personalizado e inclusivo para alunos do ensino fundamental e médio,
            com especialização em atendimento a estudantes neurodivergentes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
              <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ensino Fundamental e Médio</h3>
              <p className="text-gray-400">Aulas adaptadas ao nível e necessidades do aluno</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
              <BrainCircuit className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Atendimento Especializado</h3>
              <p className="text-gray-400">Experiência com alunos neurodivergentes</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
              <GraduationCap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Metodologia Adaptativa</h3>
              <p className="text-gray-400">Abordagem personalizada para cada aluno</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};