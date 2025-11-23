import React from 'react';

const Footer = ({ eventInfo }) => {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-12">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-2xl font-black text-white mb-2">{eventInfo.titulo}</h3>
                <p className="text-slate-500 mb-8">{eventInfo.subtitulo}</p>

                <div className="text-sm text-slate-600">
                    <p>&copy; 2025 {eventInfo.colegio}. Todos los derechos reservados.</p>
                    <p className="mt-2">Desarrollado por el Club de Programación</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
