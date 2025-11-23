import React from 'react';
import { Fan, Cpu, MemoryStick, Zap } from 'lucide-react';

const HardwareVisual = ({ type }) => {
    switch (type) {
        case 'motherboard':
            return (
                <div className="w-[420px] h-[580px] relative bg-gradient-to-br from-green-800 via-green-900 to-green-950 rounded-2xl shadow-2xl border-4 border-green-700/50 overflow-hidden">
                    {/* PCB Pattern */}
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2322c55e' stroke-width='0.5'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='30' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='30' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='50' cy='30' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='30' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}></div>

                    {/* Connection Traces */}
                    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="#fbbf24" strokeWidth="2" />
                        <line x1="10%" y1="30%" x2="90%" y2="30%" stroke="#fbbf24" strokeWidth="1.5" />
                        <line x1="10%" y1="45%" x2="90%" y2="45%" stroke="#fbbf24" strokeWidth="2" />
                        <line x1="10%" y1="60%" x2="90%" y2="60%" stroke="#fbbf24" strokeWidth="1.5" />
                        <line x1="10%" y1="70%" x2="90%" y2="70%" stroke="#fbbf24" strokeWidth="2" />
                        <line x1="10%" y1="80%" x2="90%" y2="80%" stroke="#fbbf24" strokeWidth="1.5" />

                        <line x1="20%" y1="10%" x2="20%" y2="90%" stroke="#fbbf24" strokeWidth="2" />
                        <line x1="35%" y1="10%" x2="35%" y2="90%" stroke="#fbbf24" strokeWidth="1.5" />
                        <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#fbbf24" strokeWidth="2" />
                        <line x1="65%" y1="10%" x2="65%" y2="90%" stroke="#fbbf24" strokeWidth="1.5" />
                        <line x1="80%" y1="10%" x2="80%" y2="90%" stroke="#fbbf24" strokeWidth="2" />

                        {/* Component outlines */}
                        <rect x="5%" y="5%" width="20" height="15" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.4" />
                        <rect x="85%" y="8%" width="25" height="18" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.4" />
                        <circle cx="10%" cy="85%" r="6" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.5" />
                        <circle cx="90%" cy="85%" r="6" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.5" />
                    </svg>

                    {/* CPU Socket */}
                    <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-36 h-36 border-2 border-yellow-700 bg-black/50 rounded-lg flex items-center justify-center shadow-lg">
                        <div className="absolute inset-2 border border-dashed border-yellow-600/50"></div>
                        <span className="text-[11px] text-yellow-500 font-mono font-bold">AM5 SOCKET</span>
                        <div className="absolute inset-3 grid grid-cols-6 grid-rows-6 gap-[2px] opacity-40">
                            {[...Array(36)].map((_, i) => (
                                <div key={i} className="bg-yellow-700 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* RAM Slots */}
                    <div className="absolute top-[22%] right-[23%] w-8 h-44 border-2 border-slate-700 bg-black/50 rounded-sm flex flex-col justify-around py-2 shadow-lg">
                        <div className="text-[6px] text-slate-400 rotate-90 whitespace-nowrap">DDR5</div>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-full h-[2px] bg-slate-700"></div>
                        ))}
                    </div>

                    {/* PCIe Slot */}
                    <div className="absolute bottom-[35%] left-1/2 -translate-x-1/2 w-80 h-6 border-2 border-slate-700 bg-black/50 rounded flex items-center px-2 shadow-lg">
                        <span className="text-[8px] text-slate-400 font-mono">PCIe 5.0 x16</span>
                        <div className="flex-1 ml-2 flex gap-[2px]">
                            {[...Array(32)].map((_, i) => (
                                <div key={i} className="w-[2px] h-3 bg-yellow-700 opacity-60"></div>
                            ))}
                        </div>
                    </div>

                    {/* M.2 Slot */}
                    <div className="absolute bottom-[20%] right-[15%] w-32 h-8 border border-dashed border-blue-700/50 rounded flex items-center justify-center">
                        <span className="text-[7px] text-blue-400 font-mono">M.2 NVMe</span>
                    </div>

                    {/* Chipset */}
                    <div className="absolute bottom-[40%] right-[10%] w-12 h-12 bg-black border-2 border-slate-700 rounded flex items-center justify-center shadow-lg">
                        <div className="text-[7px] text-slate-400 font-bold text-center leading-tight">
                            <div>X670E</div>
                            <div className="text-[6px]">Chipset</div>
                        </div>
                    </div>

                    {/* Brand Logo */}
                    <div className="absolute top-4 left-4 text-green-100 font-black text-2xl opacity-40">
                        ASUS ROG
                    </div>
                    <div className="absolute bottom-4 right-4 text-[8px] text-green-300/50 font-mono">
                        ATX FORM FACTOR
                    </div>
                </div>
            );

        case 'cpu':
            return (
                <div className="w-32 h-32 relative bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 rounded-lg shadow-2xl border-2 border-slate-400 flex items-center justify-center overflow-hidden">
                    {/* Pins del procesador */}
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-[1px] p-1 opacity-30">
                        {[...Array(64)].map((_, i) => (
                            <div key={i} className="bg-yellow-700 rounded-sm"></div>
                        ))}
                    </div>

                    {/* Marco IHS (Integrated Heat Spreader) */}
                    <div className="absolute inset-0 border-[8px] border-orange-400/60 rounded-lg"></div>

                    {/* Centro del procesador */}
                    <div className="bg-gradient-to-br from-slate-300 to-slate-200 w-20 h-20 border-2 border-slate-500 flex flex-col items-center justify-center shadow-inner relative z-10 rounded">
                        <Cpu size={24} className="text-slate-700 mb-1" />
                        <span className="text-[11px] font-black text-slate-700 tracking-tight">AMD RYZEN</span>
                        <span className="text-[9px] text-slate-600 font-bold">9 7950X</span>
                        <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_4px_rgba(34,197,94,0.8)]"></div>
                    </div>

                    {/* Socket label */}
                    <div className="absolute bottom-2 right-2 text-[7px] text-slate-700 font-mono font-bold bg-yellow-500/30 px-1 rounded">AM5</div>
                </div>
            );

        case 'ram':
            return (
                <div className="w-6 h-40 relative bg-black rounded-md shadow-2xl border border-slate-700 flex flex-col items-center overflow-hidden group">
                    {/* Heat Spreader con diseño */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-black">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                    </div>

                    {/* RGB Light Bar animado */}
                    <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-90 z-10 animate-pulse"></div>
                    <div className="w-2 h-full bg-gradient-to-b from-red-400 via-purple-500 to-blue-500 opacity-70 blur-[3px] animate-pulse absolute left-1/2 -translate-x-1/2"></div>

                    {/* Chips de memoria */}
                    <div className="absolute inset-x-1 top-6 bottom-6 flex flex-col justify-around z-20">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-full h-[3px] bg-slate-700 rounded-sm border-t border-slate-600"></div>
                        ))}
                    </div>

                    {/* Contactos dorados */}
                    <div className="absolute bottom-0 w-full h-5 bg-gradient-to-b from-yellow-600 to-yellow-700 z-30 border-t border-black">
                        <div className="flex justify-around h-full px-0.5">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="w-[1px] h-full bg-yellow-900/50"></div>
                            ))}
                        </div>
                    </div>

                    {/* Label */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full text-center z-30">
                        <span className="text-[6px] text-white font-bold tracking-wider opacity-70">DDR5</span>
                    </div>
                </div>
            );

        case 'gpu':
            return (
                <div className="w-80 h-24 relative bg-slate-900 rounded-xl shadow-2xl border-t border-slate-700 flex items-center justify-between px-3 overflow-hidden group">
                    {/* Backplate con textura */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:8px_8px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>

                    {/* RGB Strip superior */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] z-20"></div>

                    {/* Logo y modelo */}
                    <div className="absolute top-2 right-4 z-20">
                        <div className="text-[11px] text-white font-black tracking-widest">GeForce RTX</div>
                        <div className="text-[13px] text-green-400 font-black tracking-wider">4090 Ti</div>
                    </div>

                    {/* Ventiladores */}
                    <div className="flex gap-4 z-10 mt-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="relative w-16 h-16 rounded-full border-2 border-slate-700 bg-slate-900 flex items-center justify-center shadow-lg">
                                <div className="absolute inset-0 rounded-full border border-slate-800 opacity-50"></div>
                                <Fan size={42} className="text-slate-600 animate-[spin_0.4s_linear_infinite] opacity-60" />
                                {/* Centro del ventilador */}
                                <div className="absolute w-4 h-4 bg-slate-800 rounded-full border border-slate-600"></div>
                            </div>
                        ))}
                    </div>

                    {/* Conectores de poder */}
                    <div className="absolute bottom-2 right-3 flex gap-1 z-20">
                        <div className="w-6 h-3 bg-yellow-600 rounded-sm border border-yellow-800 flex items-center justify-center">
                            <span className="text-[5px] text-black font-bold">8PIN</span>
                        </div>
                        <div className="w-6 h-3 bg-yellow-600 rounded-sm border border-yellow-800 flex items-center justify-center">
                            <span className="text-[5px] text-black font-bold">8PIN</span>
                        </div>
                    </div>

                    {/* PCB visible en la parte inferior */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-green-800"></div>
                </div>
            );

        case 'ssd':
            return (
                <div className="w-28 h-36 relative bg-slate-800 rounded-lg shadow-2xl border border-slate-600 flex flex-col p-2 group hover:-translate-y-1 transition-transform">
                    {/* Chip controlador principal */}
                    <div className="w-full h-2/5 bg-black rounded-md mb-2 flex items-center justify-center relative overflow-hidden border border-slate-700 shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-black"></div>
                        {/* Logo Samsung */}
                        <span className="text-[11px] text-white font-black z-10 tracking-wider">SAMSUNG</span>
                        <span className="text-[9px] text-orange-500 font-bold z-10 absolute bottom-1 right-2">990 PRO</span>
                        {/* LED indicador */}
                        <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_4px_rgba(59,130,246,0.8)]"></div>
                    </div>

                    {/* Chips NAND */}
                    <div className="flex-1 bg-slate-700 rounded-md relative overflow-hidden border border-slate-600">
                        <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-[2px] p-1">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-slate-800 rounded-sm border border-slate-600 flex items-center justify-center">
                                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Conector M.2 */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-yellow-600 rounded-t-md border-x border-t border-black/50 flex items-end justify-around pb-0.5">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="w-[2px] h-2 bg-yellow-900"></div>
                        ))}
                    </div>

                    {/* Etiqueta de capacidad */}
                    <div className="absolute top-2 right-2 bg-blue-600/20 border border-blue-500/50 rounded px-1 py-0.5">
                        <span className="text-[7px] text-blue-300 font-bold">2TB</span>
                    </div>
                </div>
            );

        case 'psu':
            return (
                <div className="w-48 h-36 relative bg-slate-900 rounded-lg shadow-2xl border border-slate-700 flex items-center justify-center group">
                    {/* Etiqueta superior */}
                    <div className="absolute top-2 left-3 text-[7px] text-slate-400 font-mono font-bold">80+ GOLD</div>
                    <div className="absolute top-2 right-3 text-[8px] text-yellow-500 font-black">MODULAR</div>

                    {/* Ventilador principal - simplificado */}
                    <div className="w-32 h-28 border-2 border-slate-700 rounded-xl flex items-center justify-center bg-slate-950 relative overflow-hidden shadow-inner">
                        {/* Rejilla simplificada */}
                        <div className="absolute inset-0 border-2 border-slate-800/50 rounded-xl"></div>
                        <div className="w-[70%] h-[2px] bg-slate-800/60 absolute rotate-45"></div>
                        <div className="w-[70%] h-[2px] bg-slate-800/60 absolute -rotate-45"></div>

                        {/* Centro con especificaciones - MÁS GRANDE */}
                        <div className="bg-black z-10 px-5 py-3 rounded-lg border-2 border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                            <div className="text-[18px] text-yellow-400 font-black text-center leading-none mb-1">1200W</div>
                            <div className="text-[8px] text-slate-300 text-center font-mono font-bold">MODULAR</div>
                        </div>
                    </div>

                    {/* Conectores modulares */}
                    <div className="absolute bottom-2 left-3 flex gap-1">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-5 h-3 bg-slate-800 rounded border border-slate-600 flex items-center justify-center">
                                <div className="w-3 h-1.5 border border-yellow-700/50 rounded-sm"></div>
                            </div>
                        ))}
                    </div>

                    {/* LED de estado */}
                    <div className="absolute bottom-2 right-3 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,1)] animate-pulse"></div>
                        <span className="text-[6px] text-green-400 font-bold">ON</span>
                    </div>
                </div>
            );
        case 'cool':
            return (
                <div className="w-36 h-36 relative flex items-center justify-center group">
                    {/* Radiador */}
                    <div className="absolute inset-0 bg-slate-900 rounded-lg border border-slate-700 shadow-xl">
                        <div className="absolute inset-2 grid grid-cols-8 gap-[2px]">
                            {[...Array(32)].map((_, i) => (
                                <div key={i} className="bg-slate-800 border-l border-slate-700"></div>
                            ))}
                        </div>
                    </div>

                    {/* Efecto RGB del líquido */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-600 animate-spin-slow blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>

                    {/* Bomba/Bloque de agua */}
                    <div className="w-32 h-32 bg-slate-900 rounded-full border-4 border-slate-700 relative flex items-center justify-center overflow-hidden shadow-2xl z-10">
                        {/* Efecto de cristal */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                        {/* Tapa transparente con RGB */}
                        <div className="absolute inset-2 rounded-full border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-blue-600/20"></div>

                        {/* Ventilador interno visible */}
                        <Fan size={90} className="text-white/80 animate-[spin_0.3s_linear_infinite] relative z-10" />

                        {/* Centro del bloque */}
                        <div className="absolute w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-600 z-20 shadow-lg">
                            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                                <Zap size={16} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        </div>

                        {/* Tubos de agua */}
                        <div className="absolute -bottom-2 left-1/4 w-3 h-6 bg-black rounded-b border border-slate-700"></div>
                        <div className="absolute -bottom-2 right-1/4 w-3 h-6 bg-black rounded-b border border-slate-700"></div>
                    </div>

                    {/* Logo de marca */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] text-cyan-400 font-bold tracking-wider z-20">
                        AIO COOLER
                    </div>
                </div>
            );

        default:
            return null;
    }
};

export default HardwareVisual;
