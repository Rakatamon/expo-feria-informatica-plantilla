import React from 'react';
import ProjectCard from '../components/ui/ProjectCard';

const LevelView = ({ data, onViewDetails }) => {
    return (
        <div className="animate-fadeIn">
            <div className={`bg-gradient-to-r ${data.color} p-1 rounded-2xl mb-12`}>
                <div className="bg-slate-950 rounded-xl p-8 md:p-12 flex items-center gap-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${data.color} text-white shadow-lg`}>
                        {data.icon}
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{data.titulo}</h2>
                        <p className="text-slate-400 text-lg">{data.descripcion}</p>
                    </div>
                </div>
            </div>

            <div className={data.proyectos.length === 1
                ? "max-w-4xl mx-auto"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            }>
                {data.proyectos.map((proyecto, index) => (
                    <ProjectCard
                        key={proyecto.id}
                        proyecto={proyecto}
                        delay={index * 100}
                        onViewDetails={onViewDetails}
                        isSingle={data.proyectos.length === 1}
                        levelTitle={data.titulo}
                    />
                ))}
            </div>
        </div>
    );
};

export default LevelView;
