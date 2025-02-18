import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Calculator } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Início', href: '#home' },
    { title: 'Sobre', href: '#sobre' },
    { title: 'Serviços', href: '#servicos' },
    { title: 'Metodologia', href: '#metodologia' },
    { title: 'Contato', href: '#contato' }
  ];

  return (
    <header className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2">
            <Calculator className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Matemática com Ted</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <ul className="pt-4 pb-2 space-y-4">
            {menuItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </header>
  );
};