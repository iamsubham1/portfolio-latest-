'use client';

import React, { useRef, useState, useEffect } from 'react';
import { SectionWrapper } from '../../../hoc';
import styled from 'styled-components';
import { technologies } from '../../../../public/data';

interface Technology {
  name: string;
  icon: string;
  category: string;
  num: number;
}

const descriptions: Record<string, string> = {
  'HTML 5': 'Semantic markup and web standards.',
  'CSS 3': 'Responsive and modern layouts.',
  JavaScript: 'Core scripting and logic.',
  'React JS': 'Component-driven UIs and SPA architecture.',
  Redux: 'State management for React apps.',
  'Tailwind CSS': 'Utility-first CSS framework.',
  'Node JS': 'Backend services and API development.',
  MongoDB: 'NoSQL document database solutions.',
  git: 'Version control and collaboration.',
  Redis: 'In-memory data structures and caching.',
  Docker: 'Containerization and deployment.',
  NestJS: 'Progressive Node.js framework.',
  'Socket.IO': 'Real-time bi-directional communication.',
  TypeScript: 'Typed JavaScript for safer code.',
  PostgreSQL: 'Relational database management.',
  'Amazon Web Services': "Cloud infrastructure",
  "Apache Kafka": "Message queue for asyncronous communication"
};

const Tech: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const techRef = useRef<HTMLDivElement>(null);

  const categorizedTechnologies = technologies.reduce<Record<string, Technology[]>>(
    (acc, tech) => {
      const cat = tech.category.charAt(0).toUpperCase() + tech.category.slice(1);
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(tech);
      return acc;
    },
    {}
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (techRef.current) observer.observe(techRef.current);

    return () => {
      if (techRef.current) observer.unobserve(techRef.current);
    };
  }, []);

  return (
    <TechSection ref={techRef} aria-label="Technologies Section">
      <SectionTitle>Technologies & Expertise</SectionTitle>

      {Object.entries(categorizedTechnologies).map(([category, techList]) => (
        <CategorySection key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <TechGrid role="list">
            {techList.map(({ name, icon }) => (
              <TechItem
                key={name}
                title={name}
                role="listitem"
                tabIndex={0}
                aria-label={`${name}: ${descriptions[name] || 'Technology description not available.'}`}
              >
                <TechIcon src={icon} alt={name} loading="lazy" />
                <TechName>{name}</TechName>
                <TechDesc>{descriptions[name] || 'No description provided.'}</TechDesc>
              </TechItem>
            ))}
          </TechGrid>
        </CategorySection>
      ))}
    </TechSection>
  );
};

export default SectionWrapper(Tech, '');
const TechSection = styled.section`
  background-color: #121212;
  min-height: 70vh;
  padding: 4rem 1rem;
  color: #ddd;
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(90deg, #c471fb, #03c3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CategorySection = styled.div`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  border-left: 4px solid #03c3ff;
  padding-left: 0.75rem;
  color: #03c3ff;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2.2rem;
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1c1c1c;
  padding: 1.25rem;
  border-radius: 1rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 0 0 14px rgba(3, 195, 255, 0.5);
    transform: translateY(-4px);
    outline: none;
  }
`;

const TechIcon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 0.8rem;
  filter: drop-shadow(0 0 5px #03c3ff);
  border-radius: 12px;
  background: #1f1f1f;
  padding: 0.8rem;
`;

const TechName = styled.h4`
  font-weight: 600;
  font-size: 1.1rem;
  color: #eee;
  margin-bottom: 0.3rem;
  user-select: none;
`;

const TechDesc = styled.p`
  font-size: 0.85rem;
  color: #bbb;
  user-select: none;
  text-align: center;
  line-height: 1.4;
`;
