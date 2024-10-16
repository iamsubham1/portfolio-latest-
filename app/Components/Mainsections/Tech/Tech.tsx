import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { SectionWrapper } from "../../../hoc";
import { technologies } from "../../../../public/data";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { fadeIn } from "../../../motion/motion";

// Removed the dynamic import for BallCanvas since we're using static icons now

interface Technology {
    name: string;
    icon: string;
    num: number;
}

const Tech: React.FC = () => {
    const [inView, setInView] = useState<string | null>(null);
    const techRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView('inView');
                } else {
                    setInView(null);
                }
            },
            { threshold: 0.1 }
        );

        if (techRef.current) {
            observer.observe(techRef.current);
        }

        return () => {
            if (techRef.current) {
                observer.unobserve(techRef.current);
            }
        };
    }, []);

    return (
        <TechContainer ref={techRef}>
            <div>
                <h1 className="h1 span-gradient">Technologies</h1>
            </div>
            <div className='tech-container flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology: Technology) => (
                    <motion.div
                        variants={fadeIn('up', 'spring', technology.num, 0.5)}
                        className='tech-item'
                        key={technology.name}
                    >
                        <img
                            src={technology.icon}
                            alt={technology.name}
                            className="tech-icon"
                        />
                    </motion.div>
                ))}
            </div>
        </TechContainer>
    );
};

export default SectionWrapper(Tech, "");

let TechContainer = styled.div`
    min-height:60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    h1 {
        align-self: flex-start;
        font-size: 3rem;
        font-weight: 700;
        padding-bottom: 5rem;
    }

    .tech-container {
        max-width: 70%;
    }

    /* Hover Effect */
    .tech-item {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease-in-out;
    }

    .tech-item:hover {
        transform: scale(1.1);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .tech-icon {
        width: 6rem; /* Default size */
        height: 6rem; /* Default size */
    }

    @media only screen and (max-width: 770px) {
        h1 {
            font-size: 2.5rem;
            padding-bottom: 2rem;
        }
        .tech-container {
            gap: 0.5rem !important;
            min-width: 85vw !important;
        }
        .tech-icon {
            width: 6rem;
            height: 6rem;
        }
    }

    @media only screen and (max-width: 490px) {
        h1 {
            font-size: 1.9rem;
        }
        .tech-icon {
            width: 3.35rem;
            height: 3.35rem;
        }
        .tech-container {
            gap: 0.5rem !important;
            min-width: 90vw !important;
        }
    }
`;
