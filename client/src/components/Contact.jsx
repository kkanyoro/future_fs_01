import { useState } from 'react';
import Reveal from './Reveal';
import PixelBG from './PixelBG';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "7987929a-a654-47bc-b0a6-42591ce6da44",
                    ...formData
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <>
            <div className="bg-space-black flex flex-col">
                <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-space-black relative py-16 overflow-hidden">

                    <PixelBG />

                    {/* Background Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-accent/5 blur-[150px] rounded-full pointer-events-none"></div>

                    <div className="w-full px-6 z-10 relative">
                        <Reveal>
                            <div className="w-full max-w-2xl mx-auto">
                                <div className="text-center">
                                    <h2 className="text-slate-500 font-mono tracking-widest mb-4 uppercase text-sm">
                                    // What's Next?
                                    </h2>
                                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
                                        Get In Touch.
                                    </h1>
                                    <p className="text-slate-400 text-lg font-light mb-6">
                                        Have a question about my projects or want to work together? Send me a message below.
                                    </p>
                                </div>

                                {/* Contact Form */}
                                <form onSubmit={handleSubmit} className="space-y-6 glass-card p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-accent transition-colors"
                                                placeholder="Mike Hawkins"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-accent transition-colors"
                                                placeholder="mike@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            required
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-accent transition-colors resize-none"
                                            placeholder="Your message here..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full bg-slate-dark text-white font-bold tracking-widest uppercase py-4 rounded-lg hover:bg-space-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                                    </button>

                                    {/* Status Messages */}
                                    {status === 'success' && (
                                        <p className="text-green-400 text-center text-sm font-mono mt-4">Message sent successfully! I'll be in touch soon.</p>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-red-400 text-center text-sm font-mono mt-4">Something went wrong. Please try again.</p>
                                    )}
                                </form>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* BIG FOOTER */}
                <footer className="w-full-block m-0 bg-slate-900/40 border-t border-white/5 py-8 px-6 z-10 relative backdrop-blur-md">
                    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-6">

                        {/* Brand Logo */}
                        <div className="text-white font-bold text-2xl tracking-tighter">
                            KANYORO<span className="text-slate-500">.DEV</span>
                        </div>

                        {/* Social Links*/}
                        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                            <a href="https://github.com/kkanyoro" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">
                                GITHUB
                            </a>
                            <a href="https://linkedin.com/in/kkanyoro" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">
                                LINKEDIN
                            </a>
                            <a href="https://www.instagram.com/b.3bo_" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">
                                INSTAGRAM
                            </a>
                            <a href="https://x.com/kevinkanyoro" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">
                                X
                            </a>
                        </div>

                        {/* Copyright*/}
                        <div className="text-slate-500 text-sm md:text-base font-mono text-center">
                            © {new Date().getFullYear()} Kevin Kanyoro. All rights reserved.
                        </div>

                    </div>
                </footer>
            </div>
        </>
    );
};

export default Contact;