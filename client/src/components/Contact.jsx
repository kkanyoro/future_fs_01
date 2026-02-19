import Reveal from './Reveal';

const Contact = () => {
    return (
        <section id="contact" className="h-screen snap-start flex flex-col items-center justify-center bg-space-black relative px-6">

            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-accent/5 blur-[150px] rounded-full pointer-events-none"></div>

            <Reveal>
                <div className="text-center z-10 relative">
                    <h2 className="text-cyan-accent font-mono tracking-widest mb-4 uppercase text-sm">
            // What's Next?
                    </h2>

                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 hover:text-cyan-accent transition-colors duration-500 cursor-pointer">
                        <a href="mailto:kevinkanyoro06@gmail.com">Get In Touch.</a>
                    </h1>

                    <p className="text-slate-400 max-w-xl mx-auto text-lg mb-12 font-light">
                        I'm currently open for new opportunities. Whether you have a question about my blockchain research, graphics engines, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-8 mb-20">
                        <a href="https://github.com/kkanyoro" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:-translate-y-1">
                            <span className="text-lg font-medium tracking-widest uppercase">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/kkanyoro/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:-translate-y-1">
                            <span className="text-lg font-medium tracking-widest uppercase">LinkedIn</span>
                        </a>
                        <a href="https://www.instagram.com/b.3bo_" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:-translate-y-1">
                            <span className="text-lg font-medium tracking-widest uppercase">Instagram</span>
                        </a>
                        <a href="https://x.com/kevinkanyoro" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:-translate-y-1">
                            <span className="text-lg font-medium tracking-widest uppercase">X</span>
                        </a>
                    </div>
                </div>
            </Reveal>

            {/* True Footer */}
            <div className="absolute bottom-8 text-center w-full text-slate-600 text-sm font-mono">
                <p>© {new Date().getFullYear()} Kevin Kanyoro.</p>
            </div>

        </section>
    );
};

export default Contact;