import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

// Mini-component for horizontal scroll fading
const HorizontalScrollCard = ({ project }) => {
    const [isFocused, setIsFocused] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Triggers when at least 40% of the card is visible horizontally
                setIsFocused(entry.isIntersecting);
            },
            { threshold: 0.4 }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            // Handles the fade and shrink as card leaves center
            className={`snap-center shrink-0 w-[85vw] md:w-[600px] h-[450px] transition-all duration-700 ease-out ${isFocused ? 'opacity-100 scale-100' : 'opacity-30 scale-70'
                }`}
        >
            <ProjectCard project={project} />
        </div>
    );
};

// Main Grid Component
const ProjectGrid = ({ projects }) => {
    const categories = [...new Set(projects.map(p => p.category))];
    const [activeFilter, setActiveFilter] = useState(categories[0]);

    const filteredProjects = projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="py-24 max-w-[100vw] overflow-hidden snap-start">
            <Reveal>
                <div className="px-6 max-w-7xl mx-auto mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="text-left">
                            <h2 className="text-slate-500 font-mono tracking-widest mb-4 uppercase text-sm">
                                // Some of my works
                            </h2>
                            <h2 className="text-6xl font-bold text-white mb-2">Featured Projects</h2>
                            <div className="h-1 w-20 bg-gray-accent"></div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${activeFilter === cat
                                        ? 'bg-gray-accent text-space-black border-gray-accent'
                                        : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* key prop trick for smooth category transitions */}
                <div
                    key={activeFilter}
                    className="animate-fade-in flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 md:px-[calc(50vw-300px)] pb-12 hide-scrollbar"
                >
                    {filteredProjects.map((project) => (
                        <HorizontalScrollCard key={project.id} project={project} />
                    ))}
                </div>

            </Reveal>
        </section>
    );
};

export default ProjectGrid;