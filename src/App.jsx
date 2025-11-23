import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomeView from './views/HomeView';
import LevelView from './views/LevelView';
import PCBuilder from './components/features/PCBuilder';
import ProjectModal from './components/features/ProjectModal';
import { INFO_EVENTO, PROYECTOS_POR_NIVEL } from './data/db';

function AppContent() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const location = useLocation();

  const handleOpenProject = (project) => {
    if (project.customView === 'pc-builder') {
      setIsSimulatorOpen(true);
    } else {
      setSelectedProject(project);
    }
  };

  // Determinar la vista activa desde la URL
  const getActiveView = () => {
    const path = location.pathname.replace('/expo-feria-informatica-plantilla', '').replace('/', '') || 'home';
    return path === '' ? 'home' : path;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      {isSimulatorOpen && <PCBuilder onClose={() => setIsSimulatorOpen(false)} />}
      {selectedProject && <ProjectModal proyecto={selectedProject} onClose={() => setSelectedProject(null)} />}

      <Navbar activeView={getActiveView()} eventInfo={INFO_EVENTO} />

      <main className="container mx-auto px-6 pt-32 pb-20 min-h-screen">
        <Routes>
          <Route path="/" element={<HomeView eventInfo={INFO_EVENTO} />} />
          <Route path="/octavo" element={<LevelView data={PROYECTOS_POR_NIVEL.octavo} onViewDetails={handleOpenProject} />} />
          <Route path="/noveno" element={<LevelView data={PROYECTOS_POR_NIVEL.noveno} onViewDetails={handleOpenProject} />} />
          <Route path="/decimo" element={<LevelView data={PROYECTOS_POR_NIVEL.decimo} onViewDetails={handleOpenProject} />} />
          <Route path="/robotica" element={<LevelView data={PROYECTOS_POR_NIVEL.robotica} onViewDetails={handleOpenProject} />} />
          <Route path="/primero" element={<LevelView data={PROYECTOS_POR_NIVEL.primero} onViewDetails={handleOpenProject} />} />
          <Route path="/segundo" element={<LevelView data={PROYECTOS_POR_NIVEL.segundo} onViewDetails={handleOpenProject} />} />
          <Route path="/tercero" element={<LevelView data={PROYECTOS_POR_NIVEL.tercero} onViewDetails={handleOpenProject} />} />
        </Routes>
      </main>

      <Footer eventInfo={INFO_EVENTO} />
    </div>
  );
}

export default function App() {
  return (
    <Router basename="/expo-feria-informatica-plantilla">
      <AppContent />
    </Router>
  );
}
