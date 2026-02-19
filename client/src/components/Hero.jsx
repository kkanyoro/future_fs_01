import { useState, useEffect } from 'react';
import Reveal from './Reveal';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [
        "Full-Stack Dev",
        "Smart Contract Dev",
        "Computer Graphics Enthusiast",
    ];

    useEffect(() => {
        let timer = setTimeout(() => {
            handleTyping();
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, typingSpeed]);

    const handleTyping = () => {
        const i = loopNum % roles.length;
        const fullText = roles[i];

        if (!isDeleting) {
            setText(fullText.substring(0, text.length + 1));
            setTypingSpeed(50); // Speed when typing
            if (text === fullText) {
                setIsDeleting(true);
                setTypingSpeed(1000); // Pause at the end
            }
        } else {
            setText(fullText.substring(0, text.length - 1));
            setTypingSpeed(50); // Speed when deleting
            if (text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            }
        }
    };

    return (
        <section id="home" className="h-screen flex items-center justify-center snap-start px-6">
            <Reveal>
                <div className="text-left max-w-4xl">
                    <h2 className="text-slate-500 font-mono tracking-widest mb-4 uppercase text-sm">
                        // Welcome to my space
                    </h2>

                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight mb-2">
                        Hi, I'm <span className="text-white">Kanyoro</span>
                    </h1>

                    <div className="h-20"> {/* Fixed height to prevent layout shift during typing */}
                        <p className="text-2xl md:text-4xl text-slate-400 font-light">
                            I'm a <span className="text-cyan-accent font-medium border-r-4 border-cyan-accent pr-1 animate-pulse">
                                {text}
                            </span>
                        </p>
                    </div>

                    <div className="mt-12 flex gap-6">
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href="#contact" className="text-white hover:text-cyan-accent transition-colors flex items-center gap-2">
                            Contact Me <span>→</span>
                        </a>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default Hero;