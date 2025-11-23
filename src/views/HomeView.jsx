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
                    {eventInfo.subtitulo}
                </span>
            </h1>

            <div className="pt-0.5">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                    EDUTRIP
                </h2>
            </div>

            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light">
                {eventInfo.bienvenida}
            </p>


            {/* Botones de niveles básicos */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
                <Link to="/octavo" className="px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-500 hover:to-emerald-400 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-teal-500/25 flex items-center gap-2">
                    8vo EGB <ChevronRight size={18} />
                </Link>
                <Link to="/noveno" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-indigo-500/25 flex items-center gap-2">
                    9no EGB <ChevronRight size={18} />
                </Link>
                <Link to="/decimo" className="px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-500 hover:from-rose-500 hover:to-pink-400 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-rose-500/25 flex items-center gap-2">
                    10mo EGB <ChevronRight size={18} />
                </Link>
                <Link to="/robotica" className="px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-slate-500/25 flex items-center gap-2">
                    Club Robótica <ChevronRight size={18} />
                </Link>
            </div>

            {/* Botones de Bachillerato - destacados */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link to="/primero" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center gap-2">
                    Explorar 1ro BGU <ChevronRight size={20} />
                </Link>
                <Link to="/segundo" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-purple-500/30 flex items-center gap-2">
                    Explorar 2do BGU <ChevronRight size={20} />
                </Link>
                <Link to="/tercero" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-orange-500/30 flex items-center gap-2">
                    Explorar 3ro BGU <ChevronRight size={20} />
                </Link>
            </div>
        </div>

        {/* Información del evento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-12 border-t border-slate-800">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <h3 className="text-cyan-400 font-bold mb-2 text-lg">📅 Fecha</h3>
                <p className="text-slate-300">{eventInfo.fecha}</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-colors">
                <h3 className="text-purple-400 font-bold mb-2 text-lg">📍 Ubicación</h3>
                <p className="text-slate-300">{eventInfo.lugar}</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-green-500/50 transition-colors">
                <h3 className="text-green-400 font-bold mb-2 text-lg">🎟️ Entrada</h3>
                <p className="text-slate-300">Acceso libre para todo el público</p>
            </div>
        </div>
    </div>
);

export default HomeView;
