import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-space-black/40 backdrop-blur-xl border-b border-white/5 h-20">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                {/* LOGO */}
                <div className="text-white font-bold text-2xl tracking-tighter cursor-pointer">
                    <a href="#home">Kanyoro<span className="text-slate-500">.DEV</span></a>
                </div>

                {/* SLIDING WRAPPER */}
                <div className={`fixed top-0 right-0 h-screen transition-transform duration-300 ease-in-out z-[60] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                    {/* BUTTON */}
                    <button
                        onClick={toggleMenu}
                        className={`absolute top-5 transition-all duration-300 text-white text-3xl focus:outline-none z-[70] 
                        ${isOpen ? 'left-6 rotate-90' : '-left-16 rotate-0'}`}>
                        {isOpen ? '✕' : '☰'}
                    </button>

                    {/* SIDEBAR */}
                    <div className="h-full w-64 bg-slate-900/95 backdrop-blur-2xl shadow-2xl border-l border-white/5">
                        <ul className="flex flex-col items-center space-y-10 pt-32">
                            <li>
                                <a href="#home" onClick={toggleMenu} className="text-white text-xl font-medium tracking-widest hover:text-gray-accent transition-colors">HOME</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={toggleMenu} className="text-white text-xl font-medium tracking-widest hover:text-gray-accent transition-colors">PROJECTS</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={toggleMenu} className="text-white text-xl font-medium tracking-widest hover:text-gray-accent transition-colors">CONTACT</a>
                            </li>
                            <li className="pt-10">
                                <button className="bg-white/10 border border-white/20 px-8 py-3 rounded-full text-sm text-white hover:bg-white hover:text-space-black transition-all duration-300">
                                    RESUME
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* OVERLAY */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
                        onClick={toggleMenu}
                    ></div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;