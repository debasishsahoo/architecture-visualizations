import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SingleTierArchitecture from './components/SingleTierArchitecture';
import TwoTierArchitecture from './components/TwoTierArchitecture';
import ThreeTierArchitecture from './components/ThreeTierArchitecture';
import NTierArchitecture from './components/NTierArchitecture';
import MicroservicesArchitecture from './components/MicroservicesArchitecture';

function App() {
  const [selectedArchitecture, setSelectedArchitecture] = useState('single');
  const [menuOpen, setMenuOpen] = useState(false);

  const architectures = [
    { id: 'single', name: 'Single-Tier', component: SingleTierArchitecture },
    { id: 'two', name: 'Two-Tier', component: TwoTierArchitecture },
    { id: 'three', name: 'Three-Tier', component: ThreeTierArchitecture },
    { id: 'n', name: 'N-Tier', component: NTierArchitecture },
    { id: 'micro', name: 'Microservices', component: MicroservicesArchitecture },
  ];

  const SelectedComponent = architectures.find(
    (arch) => arch.id === selectedArchitecture
  )?.component;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Software Architecture Visualizations</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-2">
                {architectures.map((arch) => (
                  <button
                    key={arch.id}
                    onClick={() => setSelectedArchitecture(arch.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedArchitecture === arch.id
                        ? 'bg-white text-blue-600 shadow-lg'
                        : 'bg-blue-500 hover:bg-blue-400 text-white'
                    }`}
                  >
                    {arch.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md hover:bg-blue-500"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-2">
            {architectures.map((arch) => (
              <button
                key={arch.id}
                onClick={() => {
                  setSelectedArchitecture(arch.id);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedArchitecture === arch.id
                    ? 'bg-white text-blue-600'
                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                }`}
              >
                {arch.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Content Area */}
      <main className="min-h-[calc(100vh-4rem)]">
        {SelectedComponent && <SelectedComponent />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            Software Architecture Visualizations © 2025 | Educational Resource
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;