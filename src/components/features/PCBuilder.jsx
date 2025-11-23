import React, { useState, useEffect } from 'react';
import { Wrench, Box, X, Sparkles, Zap, Cpu, Monitor, HardDrive, Power, Fan, MemoryStick } from 'lucide-react';
import HardwareVisual from '../ui/HardwareVisual';

const PCBuilder = ({ onClose }) => {
    const [installedParts, setInstalledParts] = useState([]);
    const [lastAction, setLastAction] = useState(null);
    const [showCompletionModal, setShowCompletionModal] = useState(false);

    const parts = [
        {
            id: 'motherboard',
            name: 'Placa Madre',
            icon: <Cpu />,
            desc: 'La base donde se conectan todos los componentes.',
            specs: 'ASUS ROG X670E - Socket AM5 - DDR5',
            pos: 'top-[3.5%] left-1/2 -translate-x-1/2 -translate-y-1/2'
        },
        {
            id: 'cpu',
            name: 'Procesador (CPU)',
            icon: <Cpu />,
            desc: 'El cerebro de la PC. Realiza todos los cálculos.',
            specs: 'AMD Ryzen 9 - 16 Núcleos - 5.7 GHz',
            pos: 'top-1/4 left-1/2 -translate-x-1/2'
        },
        {
            id: 'ram',
            name: 'Memoria RAM',
            icon: <MemoryStick />,
            desc: 'Memoria de corto plazo para programas abiertos.',
            specs: 'DDR5 32GB - 6000 MHz',
            pos: 'top-1/4 right-[28%]'
        },
        {
            id: 'gpu',
            name: 'Tarjeta Gráfica',
            icon: <Monitor />,
            desc: 'Procesa imágenes y videojuegos en alta calidad.',
            specs: 'RTX 4090 Ti - 24GB GDDR6X',
            pos: 'bottom-[35%] left-1/2 -translate-x-1/2'
        },
        {
            id: 'ssd',
            name: 'Disco SSD',
            icon: <HardDrive />,
            desc: 'Almacenamiento rápido para archivos y Windows.',
            specs: 'Samsung 990 PRO - 2TB NVMe',
            pos: 'bottom-[10%] right-[12%]'
        },
        {
            id: 'psu',
            name: 'Fuente de Poder',
            icon: <Power />,
            desc: 'Da energía a todos los componentes.',
            specs: '1200W - 80+ Gold - Modular',
            pos: 'bottom-[10%] left-[10%]'
        },
        {
            id: 'cool',
            name: 'Refrigeración Líquida',
            icon: <Fan />,
            desc: 'Mantiene fresco el procesador.',
            specs: 'AIO 360mm RGB - 2000 RPM',
            pos: 'top-[23.9%] left-1/2 -translate-x-1/2 z-20'
        },
    ];

    const togglePart = (part) => {
        if (installedParts.includes(part.id)) {
            setInstalledParts(installedParts.filter(p => p !== part.id));
            setLastAction(null);
        } else {
            // Validar que la motherboard esté instalada primero
            if (['cpu', 'ram', 'gpu'].includes(part.id) && !installedParts.includes('motherboard')) {
                setLastAction({
                    title: "¡Espera!",
                    msg: "Primero debes instalar la Placa Madre (Motherboard) antes de agregar otros componentes.",
                    type: "error"
                });
                return;
            }
            if (part.id === 'cool' && !installedParts.includes('cpu')) {
                setLastAction({
                    title: "¡Espera!",
                    msg: "Primero debes instalar el Procesador (CPU) antes de poner el disipador.",
                    type: "error"
                });
                return;
            }
            setInstalledParts([...installedParts, part.id]);
            setLastAction({ title: part.name, msg: part.desc, type: "info" });
        }
    };

    useEffect(() => {
        if (installedParts.length === parts.length && !showCompletionModal) {
            const timer = setTimeout(() => {
                setShowCompletionModal(true);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [installedParts, parts.length, showCompletionModal]);

    const isComplete = parts.length === installedParts.length;

    return (
        <div className="fixed inset-0 z-[200] bg-slate-950 flex flex-col animate-fadeIn">
            <div className="bg-slate-900 border-b border-slate-800 p-4 flex justify-between items-center shadow-lg z-30">
                <div className="flex items-center gap-3">
                    <div className="bg-green-500/20 p-2 rounded-lg text-green-400"><Wrench /></div>
                    <div>
                        <h2 className="font-bold text-white text-xl">Simulador de Ensamblaje de PC</h2>
                        <p className="text-xs text-slate-400">Aprende las partes de una computadora</p>
                    </div>
                </div>
                <button onClick={onClose} className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-lg transition-colors font-medium">
                    Salir del Simulador
                </button>
            </div>

            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-1/3 bg-slate-900 p-4 overflow-y-auto border-r border-slate-800 z-20 shadow-xl custom-scrollbar">
                    <h3 className="text-cyan-400 font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                        <Box size={16} /> Componentes de PC
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                        {parts.map(part => {
                            const isInstalled = installedParts.includes(part.id);
                            return (
                                <button
                                    key={part.id}
                                    onClick={() => togglePart(part)}
                                    className={`w-full flex flex-col gap-2 p-3 rounded-xl border transition-all text-left group relative overflow-hidden ${isInstalled
                                        ? 'bg-slate-800/30 border-slate-700/50 opacity-50 grayscale'
                                        : 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:-translate-y-1'
                                        }`}
                                >
                                    <div className="flex items-center gap-3 z-10">
                                        <div className={`p-2 rounded-lg ${isInstalled ? 'bg-slate-700' : 'bg-cyan-900/30 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-white transition-colors'}`}>
                                            {part.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className={`font-bold text-sm ${isInstalled ? 'text-slate-500' : 'text-white group-hover:text-cyan-100'}`}>
                                                    {part.name}
                                                </span>
                                                {isInstalled && <div className="text-green-500 font-bold text-lg">✓</div>}
                                            </div>
                                            <p className={`text-[11px] ${isInstalled ? 'text-slate-600' : 'text-slate-400'} leading-tight`}>
                                                {part.desc}
                                            </p>
                                        </div>
                                    </div>
                                    {!isInstalled && (
                                        <div className="text-[9px] font-mono text-cyan-400/70 bg-slate-950/50 px-2 py-1 rounded border border-slate-700/50">
                                            {part.specs}
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-6 p-4 bg-slate-800/50 rounded-2xl border border-slate-700 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="text-4xl font-black text-white mb-2 tracking-tighter">
                                {Math.round((installedParts.length / parts.length) * 100)}%
                            </div>
                            <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden mb-2">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 transition-all duration-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                                    style={{ width: `${(installedParts.length / parts.length) * 100}%` }}
                                ></div>
                            </div>
                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                                {installedParts.length} de {parts.length} Componentes
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-slate-950 relative flex items-center justify-center p-4 md:p-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

                    {lastAction && !showCompletionModal && (
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 animate-bounce-slow w-11/12 max-w-md">
                            <div className={`${lastAction.type === 'error' ? 'bg-red-500/90 border-red-400' : 'bg-slate-800/90 border-cyan-500'} backdrop-blur-md border p-4 rounded-2xl shadow-2xl flex items-start gap-4`}>
                                <div className={`${lastAction.type === 'error' ? 'bg-red-600' : 'bg-cyan-600'} p-3 rounded-xl shrink-0 shadow-lg`}>
                                    {lastAction.type === 'error' ? <X size={24} className="text-white" /> : <Sparkles size={24} className="text-white" />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg leading-none mb-2">{lastAction.title}</h4>
                                    <p className="text-slate-200 text-sm leading-snug">{lastAction.msg}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={`relative w-[400px] h-[550px] md:w-[500px] md:h-[650px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-sm border-4 ${isComplete ? 'border-green-500 shadow-[0_0_100px_rgba(34,197,94,0.3)]' : 'border-slate-800 shadow-2xl'} rounded-3xl transition-all duration-500 flex flex-col items-center overflow-hidden`}>

                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-black/50 rounded-3xl"></div>
                        <div className="absolute top-4 left-4 right-4 h-2 bg-slate-800/50 rounded-full border border-slate-700/30"></div>
                        <div className="absolute bottom-4 left-4 right-4 h-2 bg-slate-800/50 rounded-full border border-slate-700/30"></div>

                        <div className="absolute inset-6 border-2 border-slate-700/50 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black overflow-hidden shadow-2xl">
                            {/* PCB Background Pattern */}
                            <div className="absolute inset-0 opacity-15" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2364748b' stroke-width='0.5'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='30' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='30' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='50' cy='30' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='30' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                backgroundSize: '60px 60px'
                            }}></div>

                            {/* Connection Traces */}
                            <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
                                {/* Horizontal traces */}
                                <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="#64748b" strokeWidth="1.5" />
                                <line x1="10%" y1="30%" x2="90%" y2="30%" stroke="#475569" strokeWidth="1" />
                                <line x1="10%" y1="45%" x2="90%" y2="45%" stroke="#64748b" strokeWidth="1.5" />
                                <line x1="10%" y1="60%" x2="90%" y2="60%" stroke="#475569" strokeWidth="1" />
                                <line x1="10%" y1="70%" x2="90%" y2="70%" stroke="#64748b" strokeWidth="1.5" />
                                <line x1="10%" y1="80%" x2="90%" y2="80%" stroke="#475569" strokeWidth="1" />

                                {/* Vertical traces */}
                                <line x1="20%" y1="10%" x2="20%" y2="90%" stroke="#64748b" strokeWidth="1.5" />
                                <line x1="35%" y1="10%" x2="35%" y2="90%" stroke="#475569" strokeWidth="1" />
                                <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#64748b" strokeWidth="1.5" />
                                <line x1="65%" y1="10%" x2="65%" y2="90%" stroke="#475569" strokeWidth="1" />
                                <line x1="80%" y1="10%" x2="80%" y2="90%" stroke="#64748b" strokeWidth="1.5" />

                                {/* Component outlines */}
                                <rect x="5%" y="5%" width="15" height="10" stroke="#64748b" strokeWidth="0.5" fill="none" opacity="0.3" />
                                <rect x="88%" y="8%" width="20" height="15" stroke="#64748b" strokeWidth="0.5" fill="none" opacity="0.3" />
                                <circle cx="10%" cy="85%" r="4" stroke="#64748b" strokeWidth="0.5" fill="none" opacity="0.4" />
                                <circle cx="90%" cy="85%" r="4" stroke="#64748b" strokeWidth="0.5" fill="none" opacity="0.4" />
                            </svg>

                            <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-36 h-36 border-2 border-slate-600 bg-slate-950 rounded-lg flex items-center justify-center shadow-lg">
                                <div className="absolute inset-2 border border-dashed border-slate-600/50"></div>
                                <span className="text-[10px] text-slate-400 font-mono font-bold">CPU SOCKET</span>
                                <div className="absolute inset-3 grid grid-cols-6 grid-rows-6 gap-[2px] opacity-40">
                                    {[...Array(36)].map((_, i) => (
                                        <div key={i} className="bg-slate-600 rounded-full"></div>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute top-[22%] right-[28%] w-8 h-44 border-2 border-slate-600 bg-slate-950 rounded-sm flex flex-col justify-around py-2 shadow-lg">
                                <div className="text-[6px] text-slate-500 rotate-90 whitespace-nowrap">DDR5</div>
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="w-full h-[2px] bg-slate-600"></div>
                                ))}
                            </div>

                            <div className="absolute bottom-[35%] left-1/2 -translate-x-1/2 w-80 h-6 border-2 border-slate-600 bg-slate-950 rounded flex items-center px-2 shadow-lg">
                                <span className="text-[8px] text-slate-500 font-mono">PCIe x16</span>
                                <div className="flex-1 ml-2 flex gap-[2px]">
                                    {[...Array(32)].map((_, i) => (
                                        <div key={i} className="w-[2px] h-3 bg-slate-600 opacity-60"></div>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute bottom-[20%] right-[15%] w-32 h-8 border border-dashed border-slate-600/50 rounded flex items-center justify-center bg-slate-950/50">
                                <span className="text-[7px] text-slate-500 font-mono">M.2</span>
                            </div>

                            <div className="absolute bottom-[40%] right-[20%] w-12 h-12 bg-black border-2 border-slate-600 rounded flex items-center justify-center shadow-lg">
                                <div className="text-[7px] text-slate-400 font-bold text-center leading-tight">
                                    <div>AMD</div>
                                    <div className="text-[6px] text-slate-500">Chipset</div>
                                </div>
                            </div>
                        </div>

                        {parts.map(part => (
                            <div key={part.id} className={`absolute ${part.pos} transition-all duration-700 ${installedParts.includes(part.id) ? 'scale-100 opacity-100 translate-y-0' : 'scale-150 opacity-0 -translate-y-20 pointer-events-none'}`}>
                                <div className="relative group cursor-help filter drop-shadow-2xl hover:scale-105 transition-transform z-10">
                                    <HardwareVisual type={part.id} />
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white text-xs font-bold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-600 pointer-events-none z-50 shadow-xl">
                                        {part.name}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {showCompletionModal && (
                            <div className="absolute inset-0 flex items-center justify-center z-50 bg-slate-950/80 backdrop-blur-sm rounded-3xl animate-fadeIn">
                                <div className="text-center p-8 bg-slate-900 border border-green-500/30 rounded-3xl shadow-[0_0_50px_rgba(34,197,94,0.2)] max-w-xs mx-4">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full text-white mb-6 shadow-lg animate-bounce">
                                        <Zap size={40} fill="currentColor" />
                                    </div>
                                    <h2 className="text-2xl font-black text-white mb-2 uppercase italic">¡PC Completa!</h2>
                                    <p className="text-slate-300 mb-6 text-sm">Has ensamblado correctamente todos los componentes. ¡Excelente trabajo!</p>
                                    <button
                                        onClick={() => {
                                            setInstalledParts([]);
                                            setLastAction(null);
                                            setShowCompletionModal(false);
                                        }}
                                        className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:scale-105 hover:bg-cyan-50 transition-all shadow-xl"
                                    >
                                        Reiniciar Demo
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PCBuilder;
