import React from 'react';
import { NAV_ITEMS } from '../../data/db';

const Navbar = ({ activeView, setActiveView, eventInfo }) => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div
                    className="text-xl font-black text-white tracking-tighter cursor-pointer hover:text-cyan-400 transition-colors"
                    onClick={() => setActiveView('home')}
                >
                    {eventInfo.titulo}
                </div>

                <div className="flex items-center gap-2">
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveView(item.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeView === item.id
                                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/50'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            {item.icon}
                            <span className="hidden md:inline">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
