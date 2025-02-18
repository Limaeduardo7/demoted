import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  Puzzle, 
  Target, 
  BarChart, 
  Workflow,
  Sparkles 
} from 'lucide-react';

const MethodCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
      <div className="flex items-start space-x-4">
        <div className="bg-blue-400/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const Methodology = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const methods = [
    {
      icon: Brain,
      title: "Avaliação Inicial",
      description: "Dedico tempo para conhecer cada aluno individualmente, identificando seu perfil de aprendizagem e necessidades específicas."
    },
    {
      icon: Puzzle,
      title: "Plano Personalizado",
      description: "Desenvolvo estratégias únicas adaptadas ao estilo de aprendizagem de cada aluno, garantindo um ensino verdadeiramente personalizado."
    },
    {
      icon: Target,
      title: "Objetivos Claros",
      description: "Estabeleço metas alcançáveis junto com o aluno e sua família, acompanhando de perto cada passo do progresso."
    },
    {
      icon: BarChart,
      title: "Monitoramento Contínuo",
      description: "Avalio regularmente o desenvolvimento do aluno, ajustando minha metodologia sempre que necessário para garantir o melhor aprendizado."
    },
    {
      icon: Workflow,
      title: "Abordagem Multissensorial",
      description: "Utilizo diferentes recursos e técnicas para facilitar a compreensão, tornando o aprendizado mais natural e efetivo."
    },
    {
      icon: Sparkles,
      title: "Reforço Positivo",
      description: "Valorizo cada conquista do aluno, construindo sua autoconfiança e motivação para aprender matemática."
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Minha Metodologia
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Desenvolvi uma abordagem única que combina técnicas modernas de ensino com atenção
            individualizada, garantindo que cada aluno aprenda no seu próprio ritmo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <MethodCard {...method} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};