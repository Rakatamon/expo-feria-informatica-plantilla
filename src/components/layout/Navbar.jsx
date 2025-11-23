import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../data/db';

const Navbar = ({ eventInfo }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getActiveView = () => {
        const path = location.pathname.replace('/expo-feria-informatica-plantilla', '').replace('/', '') || 'home';
        return path === '' ? 'home' : path;
    };

    const activeView = getActiveView();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
            <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-base md:text-xl font-black text-white tracking-tighter hover:text-cyan-400 transition-colors"
                >
                    <img src="/expo-feria-informatica-plantilla/logo-ueea.png" alt="UEEA" className="h-8 w-8 md:h-12 md:w-12 object-contain flex-shrink-0" />
                    <span className="hidden sm:inline">{eventInfo.titulo}</span>
                    <span className="sm:hidden text-sm">UEEA</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-2">
                    {NAV_ITEMS.map(item => (
                        <Link
                            key={item.id}
                            to={item.id === 'home' ? '/' : `/${item.id}`}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeView === item.id
                                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/50'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            {item.icon}
                            <span className="hidden xl:inline">{item.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden border-t border-slate-800 bg-slate-950/98 backdrop-blur-lg">
                    <div className="container mx-auto px-4 py-4 grid grid-cols-2 gap-2">
                        {NAV_ITEMS.map(item => (
                            <Link
                                key={item.id}
                                to={item.id === 'home' ? '/' : `/${item.id}`}
                                onClick={() => setIsMenuOpen(false)}
                                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-2 justify-center ${activeView === item.id
                                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/50'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                                    }`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
