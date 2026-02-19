import { useEffect, useRef, useState } from "react";

const Reveal = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Triggers every time the element crosses the threshold
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3, // Triggers when 30% of the element is visible
                rootMargin: "-50px 0px -50px 0px" // fades out before hitting the edge
            }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-in-out transform ${isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
                }`}
        >
            {children}
        </div>
    );
};

export default Reveal;