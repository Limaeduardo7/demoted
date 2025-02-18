import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BookOpen, 
  BrainCircuit, 
  Users, 
  Target,
  Lightbulb,
  PenTool
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300">
      <Icon className="w-10 h-10 text-blue-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: BookOpen,
      title: "Aulas Particulares",
      description: "Atendimento individualizado para alunos do ensino fundamental e médio."
    },
    {
      icon: BrainCircuit,
      title: "Atendimento Especializado",
      description: "Aulas adaptadas para alunos neurodivergentes, respeitando suas necessidades."
    },
    {
      icon: Users,
      title: "Grupos Pequenos",
      description: "Aulas em grupos reduzidos para maior atenção individual."
    },
    {
      icon: Target,
      title: "Preparação para Provas",
      description: "Auxílio específico para avaliações escolares e vestibulares."
    },
    {
      icon: Lightbulb,
      title: "Reforço Escolar",
      description: "Suporte adicional para melhor compreensão do conteúdo escolar."
    },
    {
      icon: PenTool,
      title: "Material Adaptado",
      description: "Recursos didáticos personalizados para cada aluno."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Meus Serviços
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ofereço uma variedade de serviços educacionais adaptados às necessidades
            específicas de cada aluno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};