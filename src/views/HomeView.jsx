import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

const HomeView = ({ eventInfo }) => (
    <div className="text-center space-y-12 py-10 animate-fadeIn">
        <div className="space-y-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-medium mb-4 animate-bounce-slow">
                <Sparkles size={16} /> {eventInfo.colegio}
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                    {eventInfo.titulo}
                </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light">
                {eventInfo.bienvenida}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
                <Link to="/octavo" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all hover:scale-105 border border-slate-700 flex items-center gap-2">
                    8vo EGB <ChevronRight size={18} />
                </Link>
                <Link to="/noveno" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all hover:scale-105 border border-slate-700 flex items-center gap-2">
                    9no EGB <ChevronRight size={18} />
                </Link>
                <Link to="/decimo" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all hover:scale-105 border border-slate-700 flex items-center gap-2">
                    10mo EGB <ChevronRight size={18} />
                </Link>
                <Link to="/robotica" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all hover:scale-105 border border-slate-700 flex items-center gap-2">
                    Club Robótica <ChevronRight size={18} />
                </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link to="/primero" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center gap-2">
                    Explorar 1ro BGU <ChevronRight size={20} />
                </Link>
                <Link to="/segundo" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all hover:scale-105 border border-slate-700 flex items-center gap-2">
                    Explorar 2do BGU <ChevronRight size={20} />
                </Link>
                <Link to="/tercero" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all hover:scale-105 border border-slate-700 flex items-center gap-2">
                    Explorar 3ro BGU <ChevronRight size={20} />
                </Link>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-12 border-t border-slate-800">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <h3 className="text-cyan-400 font-bold mb-2 text-lg">Fecha</h3>
                <p className="text-slate-300">{eventInfo.fecha}</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <h3 className="text-purple-400 font-bold mb-2 text-lg">Ubicación</h3>
                <p className="text-slate-300">{eventInfo.lugar}</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <h3 className="text-green-400 font-bold mb-2 text-lg">Entrada</h3>
                <p className="text-slate-300">Libre para todo público</p>
            </div>
        </div>
    </div>
);

export default HomeView;
