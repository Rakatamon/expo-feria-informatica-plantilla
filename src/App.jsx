import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomeView from './views/HomeView';
import LevelView from './views/LevelView';
import PCBuilder from './components/features/PCBuilder';
import ProjectModal from './components/features/ProjectModal';
import { INFO_EVENTO, PROYECTOS_POR_NIVEL } from './data/db';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  const handleOpenProject = (project) => {
    if (project.customView === 'pc-builder') {
      setIsSimulatorOpen(true);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      {isSimulatorOpen && <PCBuilder onClose={() => setIsSimulatorOpen(false)} />}
      {selectedProject && <ProjectModal proyecto={selectedProject} onClose={() => setSelectedProject(null)} />}

      <Navbar activeView={activeView} setActiveView={setActiveView} eventInfo={INFO_EVENTO} />

      <main className="container mx-auto px-6 pt-32 pb-20 min-h-screen">
        {activeView === 'home' && <HomeView setView={setActiveView} eventInfo={INFO_EVENTO} />}
        {activeView === 'octavo' && <LevelView data={PROYECTOS_POR_NIVEL.octavo} onViewDetails={handleOpenProject} />}
        {activeView === 'noveno' && <LevelView data={PROYECTOS_POR_NIVEL.noveno} onViewDetails={handleOpenProject} />}
        {activeView === 'decimo' && <LevelView data={PROYECTOS_POR_NIVEL.decimo} onViewDetails={handleOpenProject} />}
        {activeView === 'robotica' && <LevelView data={PROYECTOS_POR_NIVEL.robotica} onViewDetails={handleOpenProject} />}
        {activeView === 'primero' && <LevelView data={PROYECTOS_POR_NIVEL.primero} onViewDetails={handleOpenProject} />}
        {activeView === 'segundo' && <LevelView data={PROYECTOS_POR_NIVEL.segundo} onViewDetails={handleOpenProject} />}
        {activeView === 'tercero' && <LevelView data={PROYECTOS_POR_NIVEL.tercero} onViewDetails={handleOpenProject} />}
      </main>

      <Footer eventInfo={INFO_EVENTO} />
    </div>
  );
}
