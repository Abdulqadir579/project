import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Countries } from './components/Countries';
import { Process } from './components/Process';
import { Consultants } from './components/Consultants';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Countries />
      <Process />
      <Consultants />
      <Contact />
    </div>
  );
}

export default App;