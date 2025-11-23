import React from 'react';
import { Users, ArrowRight } from 'lucide-react';

const ProjectCard = ({ proyecto, delay, onViewDetails, isSingle, levelTitle }) => (
    <div
        className={`group relative bg-slate-800/50 backdrop-blur-sm border ${proyecto.customView ? 'border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'border-slate-700'} hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden animate-fadeIn flex flex-col ${isSingle ? 'h-full' : ''}`}
        style={{ animationDelay: `${delay}ms` }}
    >
        {proyecto.customView && (
            <div className="absolute top-0 right-0 bg-cyan-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg z-20">INTERACTIVO</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 flex-1">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-cyan-500/30 transition-colors ${proyecto.customView ? 'text-cyan-400' : ''}`}>
                    {proyecto.icono}
                </div>
                <span className="text-xs font-mono text-cyan-300 bg-cyan-900/20 px-2 py-1 rounded border border-cyan-900/50">
                    {proyecto.categoria}
                </span>
            </div>

            <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className={`font-bold text-white group-hover:text-cyan-300 transition-colors ${isSingle ? 'text-3xl' : 'text-xl'}`}>
                    {proyecto.nombre}
                </h3>
                {levelTitle && (
                    <span className="px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-400 text-xs border border-slate-600">
                        {levelTitle}
                    </span>
                )}
            </div>

            <p className={`text-slate-400 mb-4 ${isSingle ? 'text-lg line-clamp-none' : 'text-sm line-clamp-3'}`}>
                {proyecto.descripcion}
            </p>

            {/* Image Preview if available */}
            {proyecto.imagen && (
                <div className={`mb-4 rounded-lg overflow-hidden border border-slate-700/50 ${isSingle ? 'h-64' : 'h-40'}`}>
                    <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
            )}
        </div>

        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-700/50 mt-auto">
            <span className="text-xs text-slate-500 flex items-center gap-1 truncate max-w-[60%]">
                <Users size={12} /> {proyecto.autores}
            </span>
            <button
                onClick={() => onViewDetails(proyecto)}
                className={`text-sm font-medium flex items-center gap-1 transition-all group-hover:gap-2 cursor-pointer ${proyecto.customView ? 'text-green-400 hover:text-green-300' : 'text-cyan-400 hover:text-cyan-200'}`}
            >
                {proyecto.customView ? 'Iniciar Demo' : 'Ver detalles'} <ArrowRight size={14} />
            </button>
        </div>
    </div>
);

export default ProjectCard;
