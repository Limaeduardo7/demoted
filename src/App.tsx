import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chat } from './components/Chat';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Services />
      <Methodology />
      <Contact />
      <Footer />
      <Chat />
    </div>
  );
}

export default App;