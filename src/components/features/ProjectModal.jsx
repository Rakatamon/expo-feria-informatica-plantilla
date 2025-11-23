import React from 'react';
import { X, Users, ImageIcon } from 'lucide-react';

const ProjectModal = ({ proyecto, onClose }) => {
    if (!proyecto) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="relative h-32 bg-gradient-to-r from-slate-800 to-slate-900 p-6 flex items-end">
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-white/10 rounded-full text-white transition-colors z-20">
                        <X size={20} />
                    </button>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 flex items-center gap-4 translate-y-4">
                        <div className="p-4 bg-slate-950 rounded-xl border border-slate-700 shadow-xl">
                            {React.cloneElement(proyecto.icono, { size: 32 })}
                        </div>
                        <div>
                            <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">
                                {proyecto.categoria}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="p-8 pt-10 overflow-y-auto custom-scrollbar">
                    <h2 className="text-3xl font-bold text-white mb-2">{proyecto.nombre}</h2>
                    <div className="flex items-center gap-2 text-slate-400 mb-6 text-sm">
                        <Users size={16} />
                        <span>Desarrollado por: <span className="text-slate-200 font-medium">{proyecto.autores}</span></span>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-cyan-200 mb-2">Descripción del Proyecto</h3>
                            <p className="text-slate-300 leading-relaxed">{proyecto.contenidoLargo || proyecto.descripcion}</p>
                        </div>
                        {proyecto.imagen ? (
                            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-lg">
                                <img
                                    src={proyecto.imagen}
                                    alt={proyecto.nombre}
                                    className="w-full h-auto object-cover max-h-[400px]"
                                />
                            </div>
                        ) : (
                            <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800 border-dashed flex flex-col items-center justify-center text-slate-500 gap-3 py-12">
                                <div className="p-4 bg-slate-900 rounded-full"><ImageIcon size={32} /></div>
                                <p className="text-sm">Espacio para capturas de pantalla o video demo</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-end">
                    <button onClick={onClose} className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors">Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
