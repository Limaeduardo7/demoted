import React from 'react';
import { Calculator, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Calculator className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white">Matemática com Ted</span>
            </div>
            <p className="text-gray-400">
              Ensino especializado de matemática para alunos do ensino fundamental e médio,
              com foco em necessidades específicas e neurodivergências.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>(XX) XXXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contato@matematicacomted.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2">
              <li>Segunda a Sexta: 8h às 20h</li>
              <li>Sábado: 8h às 14h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Matemática com Ted. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};