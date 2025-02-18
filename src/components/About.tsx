import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Heart, Users } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="sobre" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sobre o Professor Ted
          </h2>
          <p className="text-gray-300">
            Com anos de experiência no ensino de matemática, dedico-me a tornar o aprendizado
            acessível e envolvente para todos os alunos, especialmente aqueles com
            necessidades específicas de aprendizagem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Experiência</h3>
            <p className="text-gray-300">
              Mais de 10 anos dedicados ao ensino de matemática para alunos do ensino
              fundamental e médio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Heart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Dedicação</h3>
            <p className="text-gray-300">
              Comprometimento com o desenvolvimento individual de cada aluno, respeitando
              seu ritmo e necessidades.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Inclusão</h3>
            <p className="text-gray-300">
              Especialização em ensino para alunos neurodivergentes, garantindo um
              ambiente acolhedor e adaptado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};