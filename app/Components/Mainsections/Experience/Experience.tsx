"use client"

import React from 'react'
import styled from 'styled-components';
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from '../../ui/TextRevealCard';
import { SectionWrapper } from '@/app/hoc';
import Image from 'next/image';
import ArrowImage1 from './assets/dotted1.png';
import ArrowImage2 from './assets/dotted2.png';
const Experience = () => {
    return (
        <ExperienceContainer>
            <div className='exp-title'>
                <h1>My <span className='span-gradient'>Work Experience</span></h1>
            </div>
            <div className='exp-card-container'>
                {/* Experience 1 */}
                <div className='exp-card'>
                    <TextRevealCard
                        text="BackEnd Developer"
                        revealText="at Chirpn IT Solutions"
                        className='exp-info-container'
                    >
                        <div className='exp-info'>
                            <TextRevealCardTitle className='info-text'>
                                Backend Developer Intern
                            </TextRevealCardTitle>
                            <TextRevealCardDescription className='info-para'>
                                As a Back-End Developer Intern at Chirpn IT Solutions, I was responsible for building and maintaining scalable microservices. I worked on optimizing database queries, improving system performance, and integrating third-party APIs. I collaborated with front-end teams to deliver seamless user experiences and ensured the system’s architecture supported high traffic and complex data processing.
                            </TextRevealCardDescription>
                        </div>
                    </TextRevealCard>
                </div>
                <ArrowContainer>
                    <Image src={ArrowImage1} alt="Curvy Arrow" style={{ filter: 'invert(1)', transform: 'rotate(-60deg)', }} />
                </ArrowContainer>
                {/* Experience 2 */}
                <div className='exp-card'>
                    <TextRevealCard
                        text="FullStack Developer"
                        revealText="at RIG Technologies"
                        className='exp-info-container'
                    >
                        <div className='exp-info'>
                            <TextRevealCardTitle className='info-text'>
                                FullStack Developer
                            </TextRevealCardTitle>
                            <TextRevealCardDescription className='info-para'>
                                At RIG Technologies, I worked as a FullStack Developer, where I was responsible for developing both front-end and back-end services. I utilized technologies like Node.js, React, and MongoDB to create dynamic, responsive web applications. My role also included collaborating with cross-functional teams, maintaining code quality, and ensuring seamless deployment pipelines using CI/CD tools.
                            </TextRevealCardDescription>
                        </div>
                    </TextRevealCard>
                </div>
                <ArrowContainer>
                    <Image src={ArrowImage2} alt="Curvy Arrow" style={{ filter: 'invert(1)', transform: 'rotate(-110deg)', }} />
                </ArrowContainer>
                {/* Experience 3 */}
                <div className='exp-card'>
                    <TextRevealCard
                        text="FrontEnd Developer"
                        revealText="at ReWork.Ai"
                        className='exp-info-container'
                    >
                        <div className='exp-info'>
                            <TextRevealCardTitle className='info-text'>
                                Frontend Developer Intern
                            </TextRevealCardTitle>
                            <TextRevealCardDescription className='info-para'>
                                As a Front-End Developer at ReWork.Ai, I worked on developing responsive web applications using React. I optimized UI components for better performance, collaborated with designers, and integrated REST APIs to ensure seamless interactions between the backend and the frontend.
                            </TextRevealCardDescription>
                        </div>
                    </TextRevealCard>
                </div>
            </div>
        </ExperienceContainer>
    )
}

export default SectionWrapper(Experience, 'about');

const ExperienceContainer = styled.div`
    min-height: 100vh;

    .exp-title {
        padding: 0.5rem;
        text-align: center;
        
        h1 {
            font-size: 3rem;
            font-weight: 800;
            
            .span-gradient {
                background: linear-gradient(90deg, rgba(2, 0, 36, 1) -30%, rgba(31, 83, 198, 1) 30%, rgba(0, 212, 255, 1) 100%);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }
        }
    }

    .exp-card-container {
        display: flex;
        justify-content: center;
        flex-direction:column ;
        align-items: center;
        min-height: 85vh;
        min-width: 98vw;
        flex-wrap: wrap;
        gap: 2rem; /* Add some space between cards */

        .exp-card {
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 45vw; /* Ensure cards are responsive */
            max-width: 45vw;

            .exp-info-container {
                padding: 2rem;
                display: flex;
                justify-content: space-between;
                min-width: 90vw;
                cursor: grab;
            }

            .info-text {
                font-size: 1.7rem;
                font-weight: 700;
                padding-bottom: 0.5rem;
            }

            .info-para {
                font-size: 1rem;
            }
        }
    }

    @media only screen and (max-width: 770px) {
        min-height: 80vh !important;

        .exp-card-container {
            min-height: 80vh !important;
        }

        .exp-title h1 {
            font-size: 2rem;
        }

        .info-text {
            font-size: 1rem !important;
            font-weight: 600;
        }

        .info-para {
            font-size: 0.8rem !important;
        }
    }

    @media only screen and (max-width: 610px) {
        .exp-info-container {
            flex-direction: column;
            align-items: center;
        }

        .info-text {
            padding-bottom: 0rem !important;
        }

        .reveal-text {
            font-size: 1.75rem !important;
        }

        .upper-text {
            font-size: 1.7rem !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .exp-title h1 {
            font-size: 1.5rem;
        }

        .info-text {
            font-size: 1rem !important;
            font-weight: 600;
        }

        .info-para {
            font-size: 0.6rem !important;
        }
    }

    @media only screen and (max-width: 355px) {
        .reveal-container {
            min-height: 15vh !important;
            min-width: 50vw !important;
            max-width: 50vw !important;
        }
    }
`;

const ArrowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    max-width:200px
`;