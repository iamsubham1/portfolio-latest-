'use client';

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { SectionWrapper } from '@/app/hoc';
import ArrowImage1 from './assets/dotted1.png';
import ArrowImage2 from './assets/dotted2.png';

const experiences = [
  {
    title: 'Backend Developer',
    company: 'IdeaUser Technologies',
    description:
      'Built full backend from scratch single-handedly, leveraging Redis, Kafka, and other technologies to create scalable and efficient microservices.',
    side: 'right',
    arrow: ArrowImage1,
  },
  {
    title: 'Backend Developer Intern',
    company: 'Chirpn IT Solutions',
    description:
      'Built scalable microservices, optimized database queries, improved system performance, and integrated third-party APIs. Collaborated with front-end teams for seamless user experiences.',
    side: 'left',
    arrow: ArrowImage1,
  },
  {
    title: 'Full-Stack Developer',
    company: 'RIG Technologies',
    description:
      'Developed web apps using React, Node.js, and MongoDB. Maintained code quality, implemented CI/CD pipelines, and collaborated across teams for robust feature delivery.',
    side: 'right',
    arrow: ArrowImage2,
  },
  {
    title: 'Frontend Developer Intern',
    company: 'ReWork.Ai',
    description:
      'Created responsive UIs with React, optimized component performance, and collaborated with designers to integrate APIs and deliver intuitive user interfaces.',
    side: 'left',
    arrow: ArrowImage1,
  },
];

const Experience = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      const scrolled = -rect.top;
      const percent = totalScrollable > 0 ? scrolled / totalScrollable : 0;

      setScrollPercent(Math.min(Math.max(percent, 0), 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper>
      <Heading>
        My <span>Work Experience</span>
      </Heading>
      <Timeline ref={timelineRef}>
        <Line />
        <Progress $percent={scrollPercent} />
        {/* <Head style={{ top: `calc(${scrollPercent * 100}%)` }} /> */}
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} side={exp.side}>
            <Card>
              <h2>{exp.title}</h2>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </Card>
          </ExperienceItem>
        ))}
      </Timeline>
    </Wrapper>
  );
};

export default SectionWrapper(Experience, 'about');

// Styled Components
const Wrapper = styled.section`
  padding: 4rem 1.5rem;
  background: #0f0f0f;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  span {
    background: linear-gradient(to right, #c471fb, #03c3ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  min-height: 140vh;
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 5px;
  background-color: #7474;
  transform: translateX(-50%);
  z-index: 1;
  border-radius: 3px;
`;

const Progress = styled.div<{ $percent: number }>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 5px;
  height: 100%;
  background: linear-gradient(to bottom, #c471fb, #03c3ff);
  transform-origin: top;
  transform: translateX(-50%) scaleY(${({ $percent }) => $percent});
  border-radius: 3px 3px 3px 3px;
  z-index: 2;
`;

const Head = styled.div`
  position: absolute;
  left: 50%;
  width: 20px;
  height: 20px;
  background: linear-gradient(to right, #c471fb, #03c3ff);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 3;
  box-shadow: 0 0 8px rgba(196, 113, 251, 0.7), 0 0 12px rgba(3, 195, 255, 0.7);
`;

const ExperienceItem = styled.div<{ side: string }>`
  display: flex;
  justify-content: ${({ side }) => (side === 'left' ? 'flex-start' : 'flex-end')};
  position: relative;
  width: 100%;
  padding: 0.5rem;
  flex-direction: column;
  align-items: ${({ side }) => (side === 'left' ? 'flex-start' : 'flex-end')};
  z-index: 4;
`;

const Card = styled.div`
  background: #1c1c1c;
  padding: 1.5rem;
  border-radius: 1rem;
  max-width: 360px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  h2 {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
  }
  h4 {
    font-size: 1rem;
    color: #03c3ff;
    margin-bottom: 0.75rem;
  }
  p {
    color: #ccc;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;
